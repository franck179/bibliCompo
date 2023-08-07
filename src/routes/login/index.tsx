import {$, component$} from '@builder.io/qwik';
import { routeLoader$, type DocumentHead } from '@builder.io/qwik-city';
import {
    email,
    type InitialValues,
    minLength,
    required, reset,
    useForm,
} from '@modular-forms/qwik';
import StandaloneLinkOutlinedBtn from "~/components/buttons/standaloneLinkOutlinedBtn";


type LoginForm = {
    email: string;
    password: string;
};

export const useFormLoader = routeLoader$<InitialValues<LoginForm>>(() => ({
    email: '',
    password: '',
}));

export default component$(() => {
    // Use login form
    const [loginForm, { Form, Field }] = useForm<LoginForm>({
        loader: useFormLoader(),
    });
    const myClickAction =$(() => console.log("You clicked on reset"));

    return (
        <Form
            class=" space-y-12 md:space-y-14 lg:space-y-16"
            onSubmit$={(values) => console.log(values)}
        >
            {/*<FormHeader of={loginForm} heading="Login form" />*/}
            <div class="flex flex-col space-y-8 md:space-y-10 lg:space-y-12">
                <div class={"my-1"}>
                <Field
                    name="email"

                    validate={[
                        required('Please enter your email.'),
                        email('The email address is badly formatted.'),
                    ]}

                >
                    {(field, props) => (
                        <input
                            {...props}
                            value={field.value}
                            type="email"
                            id="Email"
                            placeholder="example@email.com"
                            required
                        />
                    )}
                </Field>
                </div>
                <div class={"my-1"}>
                <Field
                    name="password"
                    validate={[
                        required('Please enter your password.'),
                        minLength(8, 'You password must have 8 characters or more.'),
                    ]}
                >
                    {(field, props) => (
                        <input
                            {...props}
                            value={field.value}
                            type="password"
                            id="Password"
                            placeholder="********"
                            required
                        />
                    )}
                </Field>
                </div>
                <button class="bg-lm-primary-normal text-lm-textColor dark:text-dm-textColor" type="submit">
                    Login
                </button>
                <StandaloneLinkOutlinedBtn
                onClick={myClickAction}
                >
                    RESET FORM
                </StandaloneLinkOutlinedBtn>
                <button
                    class="btn btn-secondary"
                    type="reset"
                    onClick$={() => reset(loginForm)}
                >
                    Reset
                </button>
            </div>
            {/*<FormFooter of={loginForm} />*/}
        </Form>
    );
});

export const head: DocumentHead = {
    title: 'Login form',
};