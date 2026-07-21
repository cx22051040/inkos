import { useEffect, useRef } from "react";
import type { HashRoute } from "../../hooks/use-hash-route";
import { setProjectChatSessionId } from "../../pages/chat-page-state";
import { useChatStore } from "../../store/chat";
import type { PortalLaunchKind } from "./launch-config";

interface PortalLaunchActions {
  readonly createDraftSession: (bookId: null, kind: PortalLaunchKind) => string;
  readonly setProjectSessionId: (sessionId: string) => void;
  readonly setChatInput: (value: string) => void;
  readonly setRoute: (route: HashRoute) => void;
}

export function activatePortalLaunch(
  kind: PortalLaunchKind,
  actions: PortalLaunchActions,
): string {
  const sessionId = actions.createDraftSession(null, kind);
  actions.setProjectSessionId(sessionId);
  actions.setChatInput("");
  actions.setRoute({ page: "chat" });
  return sessionId;
}

export function usePortalLaunch(
  route: HashRoute,
  setRoute: (route: HashRoute) => void,
): void {
  const createDraftSession = useChatStore((state) => state.createDraftSession);
  const setChatInput = useChatStore((state) => state.setInput);
  const handledLaunch = useRef<PortalLaunchKind | null>(null);

  useEffect(() => {
    const launchKind = route.page === "chat" ? route.launch : undefined;
    if (!launchKind) {
      handledLaunch.current = null;
      return;
    }
    if (handledLaunch.current === launchKind) return;

    handledLaunch.current = launchKind;
    activatePortalLaunch(launchKind, {
      createDraftSession,
      setProjectSessionId: setProjectChatSessionId,
      setChatInput,
      setRoute,
    });
  }, [createDraftSession, route, setChatInput, setRoute]);
}
