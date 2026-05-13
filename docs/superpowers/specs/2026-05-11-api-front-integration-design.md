# StyleUp API-Frontend Integration Design

Date: 2026-05-11

## Goal
Integrate the backend API with the React frontend to replace mock data, using a centralized client, service modules, and context-driven state. The integration must support authentication, core appointment flows, and additional domains (clientes, barberos, horarios), with global error handling via toasts/modals.

## Non-Goals
- Redesigning UI layouts or visual styling.
- Refactoring unrelated components.
- Switching to a full data-fetching framework (e.g., React Query) for this phase.

## Current Context
- Frontend uses local state and mock data in the context provider.
- Backend exposes REST endpoints under `/auth`, `/citas`, `/clientes`, `/barberos`, `/horarios` with JWT auth middleware.
- The API is reachable at `http://localhost:3001/`.

## Architecture
1. **API Client**
   - Single HTTP client using `fetch` with base URL from environment (e.g., `VITE_API_URL`).
   - Request helper attaches `Authorization: Bearer <token>` when available.
   - Central response handler maps API errors into user-facing messages.

2. **Service Layer**
   - Domain modules to encapsulate endpoint calls:
     - `authService` for login, refresh, logout.
     - `citasService` for list, create, cancel, update status.
     - `clientesService`, `barberosService`, `horariosService` for CRUD and profile flows.
   - Services return typed data and normalized errors.

3. **Context Orchestration**
   - `AppContext` owns session state and domain data state.
   - Context actions call services and update local state.
   - Panels/pages read from context; mock data is removed in the same areas.

4. **Global Error Handling**
   - A toast/modal manager displays errors from services.
   - Context functions can push error messages; view components do not implement custom error handling unless needed for UX.

## Data Flow
1. User logs in via modal.
2. Login action calls API, receives tokens, stores in memory, and sets session state.
3. After login, context loads initial domain data (citas, perfil, etc.).
4. User actions (reserve/cancel/editar) call services and update context state.
5. Refresh token flow is used only if a call fails due to access token expiry; if refresh fails, session is cleared and the user is redirected to login.

## Error Handling Rules
- API errors are mapped to friendly messages and shown in the global toast/modal.
- 401 or token-expired responses trigger refresh, then retry once.
- Validation errors are shown inline when they belong to a specific form; otherwise they use the global handler.

## Security & Storage
- Access and refresh tokens are stored in memory only.
- On page reload, the user must log in again; no long-lived storage is used.

## Testing Strategy
- Smoke test login/logout on both roles.
- Verify `citas` list, create, and cancel flows.
- Validate error behavior for invalid credentials and expired tokens.

## Implementation Phases
1. Add API client and service modules.
2. Replace auth in `AppContext` (login/logout/refresh).
3. Integrate `citas` flows.
4. Integrate remaining domains (clientes, barberos, horarios).
5. Remove mock data references and clean types.

## Open Questions
- None. All required decisions provided and approved.
