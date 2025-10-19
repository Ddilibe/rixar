import { useLandingContext } from "@/context/landingpage-context";
import { useEffect, type JSX } from "react";
import { DisplayPath } from "./nav-bar";
import { cn } from "@/lib/utils";
import { Header } from "./header";

/**
 * Defines the properties for the Hero and PreHero components.
 *
 * @remarks
 * The `HeroProp` type specifies all required and optional fields
 * for rendering a hero section, including title text, breadcrumb path,
 * parent page context, and background image.
 */
export type HeroProp = {
  /** The main title text displayed in the hero section. */
  title: string;

  /** The breadcrumb navigation path displayed under the title. */
  heroPath: string[];

  /** The parent page identifier, used for managing context focus. */
  pageParent: string;

  /** The background image URL for the hero section. */
  image: string;

  /** Optional CSS class for additional styling. */
  className?: string;
};

/**
 * A reusable layout component that serves as the foundation
 * for hero sections across the application.
 *
 * @remarks
 * The `PreHero` component handles context updates (focus and breadcrumb path)
 * and applies background image and layout styling.
 *
 * @param props - The component props.
 * @param props.children - Optional nested React element(s) to render inside the hero.
 * @param props.className - CSS class for customizing layout and appearance.
 * @param props.title - The title text displayed prominently in the hero.
 * @param props.heroPath - The breadcrumb navigation path.
 * @param props.pageParent - The parent page identifier, used for setting focus.
 * @param props.image - The background image URL for the hero section.
 *
 * @returns The rendered `PreHero` JSX element.
 */
export function PreHero({
  children,
  className,
  title,
  heroPath,
  pageParent,
  image,
}: {
  children?: React.ReactElement;
  className: string;
  title: string;
  heroPath: string[];
  pageParent: string;
  image: string;
}): JSX.Element {
  // Access context functions for managing landing page state.
  const { setFocus, setPath } = useLandingContext();

  // Initialize focus and breadcrumb path when component mounts.
  useEffect(() => {
    setFocus(pageParent);
    setPath(heroPath);
  }, []);

  // Render hero background, title, and breadcrumb display.
  return (
    <div
      className={cn(
        "md:pb-10 bg-cover bg-center md:mx-30 brightness-75",
        className
      )}
      style={{ backgroundImage: `url("${image}")` }}
    >
      {children}
      <div className="md:mx-40 mx-2 flex flex-col justify-center items-start text-left text-sm gap-4 text-white">
        <span className="text-lg font-black md:text-5xl">{title}</span>
        <DisplayPath />
      </div>
    </div>
  );
}

/**
 * A high-level hero component that composes the `PreHero` layout
 * with a standard header and breadcrumb navigation.
 *
 * @remarks
 * The `Hero` component provides a consistent hero section with
 * a background image, page title, and navigational path display.
 *
 * @param props - The component props defined by {@link HeroProp}.
 *
 * @returns The rendered `Hero` JSX element.
 */
export function Hero({
  title,
  heroPath,
  pageParent,
  image,
  className,
}: HeroProp): JSX.Element {
  return (
    <PreHero
      className={cn("w-full", className)}
      title={title}
      heroPath={heroPath}
      pageParent={pageParent}
      image={image}
    >
      <Header />
    </PreHero>
  );
}
