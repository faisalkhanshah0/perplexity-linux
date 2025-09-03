# Perplexity Linux

A minimal Electron desktop wrapper for **Perplexity** that runs the official web app in a clean, native window with persistent login and optional mic/camera access for voice.

> Not affiliated with Perplexity. Uses the official Perplexity web UI.

---

## ✨ Features
- Native desktop window for Perplexity
- Persistent login (separate app session)
- External links open in your default browser
- Optional mic/camera access (Linux Snap plugs)

---

## 📦 Installation

### Install via Snap (Recommended)
If your system supports Snap, you can install directly from the Snap Store:

[![Get it from the Snap Store](https://snapcraft.io/en/dark/install.svg)](https://snapcraft.io/perplexity)

```bash
sudo snap install perplexity
```

📹 Enabling Video Calls and Audio (Required Setup) To use video calls, voice calls, and microphone features in Teams, you need to manually enable camera and audio permissions after installation:

```bash
sudo snap connect perplexity:camera
sudo snap connect perplexity:audio-record
sudo snap connect perplexity:audio-playback
sudo snap connect perplexity:pulseaudio
```

Once installed, start the app from your system application menu or by running:

```bash
perplexity
```