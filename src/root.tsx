import {component$, ContextId, createContextId, Signal, useContextProvider, useSignal} from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  ServiceWorkerRegister,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";


export const etabContextId : ContextId<Signal<string>> = createContextId("etabId");
export const elvContextId : ContextId<Signal<string>> = createContextId("elvId");
export const classeContextId : ContextId<Signal<string>> = createContextId("classeId");

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
    console.log("dans root")

  return (
    <QwikCityProvider>
      <head>
        <meta charSet="utf-8" />
        <link rel="manifest" href="/manifest.json" />
        <RouterHead />
      </head>
      <body lang="en">
        <RouterOutlet />
        <ServiceWorkerRegister />
      </body>
    </QwikCityProvider>
  );
});
