# StyleUp Auth Pages and Admin Login Design

Date: 2026-05-11

## Goal
Move authentication from modals to dedicated pages and add a secret superadmin login at `/admin`. Client registration remains available; barber registration is removed from the frontend. Sessions persist across reloads via refresh tokens.

## Non-Goals
- Building a full superadmin dashboard.
- Adding multi-factor or extra security for the admin login in this phase.
- Changing backend auth schemas or roles.

## Architecture
### Routes
- `/` Landing page only.
- `/login` Login page for client/barber (cedula + password).
- `/register` Client-only registration page.
- `/admin` Superadmin-only login page (correo + password).
- `/dashboard` Existing client/barber dashboard.

### Auth
- Client/Barber login uses `POST /auth/login/cliente` and `POST /auth/login/barbero`.
- Superadmin login uses `POST /auth/login/superadmin` with `correo` and `contrasena`.
- Session persistence: refresh token stored in localStorage; restore on reload via `/auth/refresh`.

### Types
- Add `SuperAdmin` interface.
- Extend `Sesion.usuario` to include `SuperAdmin`.

## UX and Components
- Remove auth modals from Home page.
- New pages: `LoginPage`, `RegisterPage`, `AdminLoginPage`.
- Remove barber registration entry points from UI.

## Error Handling
- Global toast for API errors.
- Inline form errors for validation feedback.

## Testing
- Login client and barber on `/login`.
- Register client on `/register`.
- Login superadmin on `/admin`.
- Refresh page and verify session stays active.

## Open Questions
- None. All decisions approved.
