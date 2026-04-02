# AntiMuteDeafen

> A Vencord plugin that automatically reverts server-imposed mutes and deafens.

If a server administrator forces you to be muted or deafened, this plugin will instantly unmute/undeafen you, provided you have the necessary permissions. If you lack the required permissions to modify your own state, the plugin will take no action.

---

## Installation Guide

### Step 1: Clone the Repository and Install Dependencies

```bash
git clone https://github.com/Vendicated/Vencord
cd Vencord
pnpm install --no-frozen-lockfile
```

### Step 2: Create the Plugin Folder and Add Files

Inside the Vencord project root, navigate to the `src/` directory and manually create the following folder structure:

```
src/
└── userplugins/
    └── antiMuteDeafen/
        └── index.ts
```

1. Create the `userplugins` folder inside `src/` (if it doesn't already exist).
2. Create the `antiMuteDeafen` folder inside `userplugins/`.
3. Place your `index.ts` file inside the `antiMuteDeafen/` folder.

The directory structure **must** look like this:
`src/userplugins/antiMuteDeafen/index.ts`

### Step 3: Build and Inject into Discord

```bash
pnpm build
pnpm inject
```

### Step 4: Enable the Plugin

Restart Discord, then navigate to **Settings → Plugins**. Search for **AntiMuteDeafen** and toggle it on.

The plugin settings panel provides two independent toggles:

| Option | Description | Default |
| :--- | :--- | :--- |
| **Anti Mute** | Automatically unmutes when server-muted | ON |
| **Anti Deafen** | Automatically undeafens when server-deafened | ON |

---

## ⚠️ Warning

This plugin automates user actions, which is a **violation of the Discord Terms of Service (ToS)**.

> **Use this plugin at your own risk.** The author takes no legal or moral responsibility for any account warnings, suspensions, or bans resulting from the use of this software.

Please ensure you fully understand the risks before proceeding.

---

## Author

**Cody**
