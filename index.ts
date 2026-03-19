/*
 * Vencord, a Discord client mod
 * Copyright (c) 2026 Vendicated and contributors
 * SPDX-License-Identifier: GPL-3.0-or-later
 */

import { definePluginSettings } from "@api/Settings";
import { Logger } from "@utils/Logger";
import definePlugin, { OptionType } from "@utils/types";
import { VoiceState } from "@vencord/discord-types";
import { RestAPI, UserStore } from "@webpack/common";

const logger = new Logger("AntiMuteDeafen");

const settings = definePluginSettings({
    antiMute: {
        type: OptionType.BOOLEAN,
        description: "Automatically unmute when server muted.",
        default: true,
    },
    antiDeafen: {
        type: OptionType.BOOLEAN,
        description: "Automatically undeafen when server deafened.",
        default: true,
    },
});

export default definePlugin({
    name: "AntiMuteDeafen",
    description: "Automatically removes server mute and deafen if you have permission.",
    authors: [{ name: "Cody", id: 0n }],
    settings,

    flux: {
        VOICE_STATE_UPDATES({ voiceStates }: { voiceStates: VoiceState[]; }) {
            const currentUserId = UserStore.getCurrentUser()?.id;
            if (!currentUserId) return;

            for (const state of voiceStates) {
                if (state.userId !== currentUserId || !state.guildId) continue;

                const body: { mute?: boolean; deaf?: boolean; } = {};
                if (settings.store.antiMute && state.mute) body.mute = false;
                if (settings.store.antiDeafen && state.deaf) body.deaf = false;

                if (!Object.keys(body).length) continue;

                RestAPI.patch({
                    url: `/guilds/${state.guildId}/members/${currentUserId}`,
                    body,
                }).catch(e => logger.debug("No permission to unmute/undeafen.", e));
            }
        }
    }
});
