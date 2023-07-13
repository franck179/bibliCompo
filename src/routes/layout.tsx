import {
    component$,
    ContextId,
    createContextId, Signal,
    Slot,
    useContext,
    useContextProvider,
    useSignal,
    useTask$
} from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";
import ElvEtabHead from "~/components/en-tetes/elvEtabHead";
import {classeContextId, elvContextId, etabContextId} from "~/root";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  });
};




export default component$(() => {


    const etabId = useContext(etabContextId);
    const elvId = useContext(elvContextId);
    const classeId = useContext(classeContextId);

    useTask$(async ({track}) => {
        track(() => etabId.value);
        console.log("In routes layout, etabId.value = ", etabId.value);
    });


    return (
        <div class={"flex flex-col w-full justify-center"}>
            <div class={"flex flex-col w-full  max-w-7xl border-2 border-blue-500 self-center px-10 "}>
                <ElvEtabHead nomEtab={etabId.value} nomElv={elvId.value} nomClasse={classeId.value} />
                <Slot />
            </div>
        </div>
    );
});
