import type { ContextId, Signal} from "@builder.io/qwik";
import {component$, createContextId, useContextProvider, useSignal} from "@builder.io/qwik";
import {
    QwikCityProvider, routeLoader$,
    RouterOutlet,
    ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";


export const etabContextId : ContextId<Signal<string>> = createContextId("etabId");
export const elvContextId : ContextId<Signal<string>> = createContextId("elvId");
export const classeContextId : ContextId<Signal<string>> = createContextId("classeId");

export const themeContextId : ContextId<Signal<string>> = createContextId("themeId");
export const systemThemeContextId : ContextId<Signal<string>> = createContextId("systemThemeId");



export default component$(() => {
  /**
   * The root of a QwikCity site always start with the <QwikCityProvider> component,
   * immediately followed by the document's <head> and <body>.
   *
   * Don't remove the `<head>` and `<body>` elements.
   */
    useContextProvider(etabContextId, useSignal(""));
    useContextProvider(elvContextId, useSignal(""));
    useContextProvider(classeContextId, useSignal(""));
    useContextProvider(themeContextId, useSignal(""));
    useContextProvider(systemThemeContextId, useSignal(""));

    console.log("dans root")

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />

      </head>
      <body lang="fr" class={"bg-lbg text-onLBackground dark:bg-dbg dark:text-white/[87]"}>
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
