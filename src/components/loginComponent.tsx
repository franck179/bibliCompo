
import { Form, globalAction$} from '@builder.io/qwik-city';
import { component$ } from '@builder.io/qwik';
export const useAddUser = globalAction$(async (user) => {
    const name = user.name;
    const pass = user.pass;
    console.log('add user : '+name+' '+pass);
    return {success: true};
});

export default component$(() => {
    const action = useAddUser();
    return (
        <Form action={action} class={"flex flex-col"}>
            <label for={"name"}>Name : </label>
            <input id="name" name="name" placeholder={"Enter your name here"}/>
            <label for={"pwd"}>Password </label>
            <input id="pwd" name="pass" type={"password"} placeholder={"Enter your password here"}/>
            <button class={"bg-lm-primary-normal text-lm-textColor border border-lm-primary-lighter dark:border-dm-primary-darker dark:text-dm-textColor "}
                onClick$={() => {
                    console.log("You clicked me");
                    // console.log(action);
                }}
                type="submit">Add user</button>
            {action.value?.success && <div>User added successfully</div>}
        </Form>
    );
});