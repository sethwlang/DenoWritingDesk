import { PageProps } from "$fresh/server.ts";

export default function Layout({ Component, state }: PageProps) {
    // do something with state here
    return (
        <div class="layout">
            <nav>
                <div>
                    Logo
                </div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/coaching">Book Coaching</a>
                    </li>

                        <a href="https://usethewritingdesk.kit.com/stop-waiting" target="_blank">Newsletter</a>

                    <li>
                        <a href="/about">About</a>
                    </li>

                </ul>
            </nav>
            <Component/>
            <footer>© Copyright 2025 The Writing Desk, LLC | <a href="/disclaimer">Disclaimer</a> | <a href="/tos">Terms of
                Use</a> | <a href="/privacy">Privacy Policy</a></footer>
        </div>
    );
}