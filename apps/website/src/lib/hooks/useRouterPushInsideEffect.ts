import { useRouter } from 'next/router';
import type { NextRouter } from 'next/router';
import { useRef, useState } from 'react';

/**
 * Allow to use nextjs router.push() inside an effect or callback.
 * @link https://github.com/vercel/next.js/issues/18127#issuecomment-950907739
 *
 * @example
 * ```
 * const push = useRouterPushInsideEffect()
 *
 * useEffect(() => {
 *     getAuthenticationStatus().then(authenticated => {
 *         if (!authenticated) {
 *            push('/login')
 *         }
 *     })
 * }, [push])
 * ```
 */
export function useRouterPushInsideEffect(): NextRouter['push'] {
  const router = useRouter();
  const routerRef = useRef(router);

  routerRef.current = router;

  const [{ push }] = useState<Pick<NextRouter, 'push'>>({
    push: (path) => routerRef.current.push(path),
  });

  return push;
}
