# YouTube Frontend Clone

A static, responsive homepage clone of YouTube built using pure HTML5 and CSS3. This project replicates the modern YouTube desktop UI, complete with a top navigation bar, collapsible-style sidebar, and a dynamic multi-column video card grid.

---

## Features

- **Header Bar:** Navigation header containing the YouTube logo, menu button, search bar, voice search icon, video creation tool, notifications bell, and user avatar.
- **Sidebar:** Left navigation bar with quick links to Home, Shorts, Subscriptions, and User library.
- **Responsive Video Grid:** Multi-card grid displaying video thumbnails, video duration badges, channel profile pictures, title metadata, channel names, view counts, and upload timestamps.
- **External Links:** Direct links on video thumbnails and channel avatars pointing to official YouTube videos and channel pages.

---

## File Structure

The project follows a modular directory layout:

```text
├── 01-HTML/
│
├── 02-CSS/
│   └── youtube.css            # Stylesheets for layout, grid, and typography
├── 03-thumbnails/             # Video thumbnail assets (t1.avif, t2.avif, etc.)
├── 04-profile_picture/        # Channel avatar images (p1.jpg, p2.jpg, etc.)
└── 05-icons/                  # UI icon assets (Home.svg, Bell.png, Search.png, etc.)

index.html           # Main HTML markup for the YouTube clone