---
title: "Articulate Input: AI Voice Typing That Works Everywhere"
description: "How we built a system-wide AI voice input method that turns natural speech into polished text — locally or in the cloud, in 99 languages."
date: "2026-03-30"
author: "Paean Team"
tags: ["voice-input", "ai", "transcription", "productivity", "macos"]
featured: true
---

## The Problem with Voice Input

Voice typing has been a broken promise for decades. Built-in dictation is slow, inaccurate, and requires you to speak like a robot. Third-party solutions are expensive, cloud-only, and locked to specific apps.

We wanted something different: a voice input method that works system-wide, in any app, in any language — with AI that turns messy speech into clean text.

That's Articulate Input.

## How It Works

The workflow is dead simple:

1. Press a global hotkey (works in any app)
2. Speak naturally — pauses, corrections, and all
3. AI-enhanced text appears at your cursor

Under the hood, there are two transcription paths:

**Local mode** runs Whisper large-v3-turbo entirely on your Mac. No network, no cloud, no data leaving your machine. Ideal for sensitive work.

**Cloud mode** sends audio to our Gemini Flash Lite pipeline for faster, more accurate results. The audio is processed in real-time and never stored.

## AI Enhancement: From Speech to Text

Raw transcription is rarely ready to use. People say "um", repeat words, trail off mid-sentence. The AI Enhancement layer fixes this automatically:

- Grammar and punctuation correction
- Filler word removal
- Sentence structure cleanup
- Context-aware formatting

This runs as an optional post-processing step. You can toggle it per-use or set it as default.

## CJK Language Optimization

One challenge we solved is handling Chinese, Japanese, and Korean text. Most speech-to-text engines insert spaces between CJK characters at pause boundaries — something that looks unnatural in these languages.

Articulate Input strips these unnecessary spaces both at the model prompt level and through post-processing filters, producing clean continuous text as native speakers expect.

## Power Mode: Context-Aware Voice Input

Different apps need different behavior. In a chat app, you might want voice input to auto-send after transcription. In a code editor, you want a different formatting style. In a note-taking app, you want markdown structure.

Power Mode lets you configure per-app profiles with:

- Custom AI enhancement prompts
- Auto-send keys (Enter, Shift+Enter, Cmd+Enter)
- Website-specific configurations
- Language overrides

## Privacy Architecture

We take a dual-track approach to privacy:

- **Local transcription**: Whisper runs entirely on-device. Audio never leaves your Mac.
- **Cloud transcription**: Audio is sent over TLS, processed by Gemini Flash, and immediately discarded. No audio files are stored on our servers.
- **Voice input logs**: Optional sync to your Paean account for building a personal knowledge timeline. Fully opt-in.

## Platform Availability

**macOS** — Available now as a native app. Signed and notarized by Apple. Download the DMG from [a8e.ai/articulate](https://a8e.ai/articulate).

**Android** — Voice input is built into the Paean AI app. Install from [paean.ai](https://paean.ai) to get voice input alongside the full AI assistant experience.

**iOS** — Coming soon. Voice input will be integrated into the Paean AI iOS app.

## Getting Started

1. Download [Articulate Input for macOS](https://r.paean.ai/articulate/ArticulateInput-macos.dmg)
2. Open the app and grant Accessibility + Microphone permissions
3. Set your preferred hotkey
4. Start speaking

For cloud features (Gemini transcription, AI enhancement, voice history sync), sign in with your Paean account. Local Whisper transcription works without an account.

## What's Next

We're working on deeper integration with the Paean AI ecosystem — voice input as a first-class input modality for agents, voice-driven workflows, and a unified voice history across all your devices.

Voice is the most natural human interface. We're building the infrastructure to make it the most productive one too.
