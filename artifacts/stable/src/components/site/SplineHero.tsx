import { Component, type ReactNode, Suspense, lazy } from "react";
import SoftAurora from "@/components/reactbits/SoftAurora/SoftAurora";

const Spline = lazy(() => import("@splinetool/react-spline"));

// Community file viewer — works for public Spline community scenes
const SCENE_URL =
  "https://prod.spline.design/615b9422-9985-43f6-8593-d7d7bc3b0be1/scene.splinecode";

class SplineBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { error: boolean }
> {
  state = { error: false };
  static getDerivedStateFromError() {
    return { error: true };
  }
  render() {
    if (this.state.error) return this.props.fallback;
    return this.props.children;
  }
}

const Fallback = (
  <div className="absolute inset-0 opacity-60">
    <SoftAurora color1="#EF4444" color2="#F04A30" />
  </div>
);

export function SplineHero() {
  return (
    <div className="absolute inset-0">
      <SplineBoundary fallback={Fallback}>
        <Suspense fallback={Fallback}>
          <Spline
            scene={SCENE_URL}
            style={{ width: "100%", height: "100%" }}
            onError={() => {}}
          />
        </Suspense>
      </SplineBoundary>
    </div>
  );
}
