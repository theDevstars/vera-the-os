#!/bin/sh
# Run as root on Debian/Ubuntu with: apt install live-build
set -e
chmod +x auto/config config/hooks/live/*.chroot
lb clean --purge || true
lb config
lb build
mv -f live-image-amd64.hybrid.iso VeraOS.iso
sha256sum VeraOS.iso > VeraOS.iso.sha256
