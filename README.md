# Vera OS
Debian 13 + KDE Plasma 6 (Wayland), styled as a macOS-inspired desktop. Built with live-build; GRUB (UEFI) + syslinux (BIOS); Calamares installer.

## Build
`sudo apt install live-build curl jq && sudo ./build.sh` produces `VeraOS.iso`, or push to GitHub and download the Actions artifact.

## Write to USB
`sudo dd if=VeraOS.iso of=/dev/sdX bs=4M status=progress conv=fsync` (double-check the device) or use balenaEtcher.

## Test in a VM
`qemu-system-x86_64 -m 4G -enable-kvm -cdrom VeraOS.iso -bios /usr/share/ovmf/OVMF.fd`, or VirtualBox / GNOME Boxes with EFI enabled.

## Status (honest)
| Area | State |
|---|---|
| Build config, package list, CI | written, never run |
| Helium | fetched from the official upstream release at build time; the build fails if no matching asset is found (asset-name regex needs verifying). Upstream LICENSE files are copied to /usr/share/doc/helium. Default browser, Dock-pinned, on Desktop |
| Menu bar, Dock, traffic lights, Overview, virtual desktops, blur | Plasma built-ins plus a layout script, untested |
| Dock magnification | not implemented (Plasma 6 has none natively; needs a third-party dock or plugin) |
| Bible app | Qt app with search, bookmarks, copy-to-share, devotional, local prayer journal. Ships a 9-verse sample of KJV and WEB; full texts must be added as JSON in ~/.local/share/vera-bible/translations/. NIV and ESV are licensed and not bundled |
| Daily verse | desktop plasmoid plus login notification, changes by date |
| Apps | Dolphin, Konsole, KCalc, Kate, Merkuro, Gwenview, Elisa, System Monitor, Discover, Spectacle |
| Branding | one original wallpaper; no logo, Plymouth or GRUB theme yet |
| Screenshots | none until someone builds and boots it |
