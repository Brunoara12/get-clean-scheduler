import { Outlet, NavLink, Form, useNavigation } from "react-router-dom";


export default function Root() {
    const navigation = useNavigation();
    //const submit = useSubmit()

    const searching =
        navigation.location &&
        new URLSearchParams(navigation.location.search).has("q")

    return (
        <>
            <div id="sidebar">
                <h1>Get Clean Schedule</h1>
                <div>
                    <Form id="search-form" role="search">
                        <input
                            className={searching ? "loading" : ""}
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"

                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={!searching}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </Form>
                    <Form method="post">
                        <button type="submit">New</button>
                    </Form>
                </div>
                <nav>
                    <ul>

                        <li >
                            <NavLink
                                to={`contacts/`}
                                className={
                                    ({ isActive, isPending }) =>
                                        isActive ? "active" :
                                            isPending ? "pending" : ""
                                }>
                                <p>TEST</p>
                            </NavLink>
                        </li>

                    </ul>

                </nav>
            </div>
            <div id="detail"
                className={
                    navigation.state === "loading" ? "loading " : ""
                }>
                <Outlet />
            </div>
        </>
    );
}