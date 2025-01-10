import { useContext, useState } from "react";
import "../App.css";
import { Input } from "@/components/ui/input.tsx";
import { AppWrapper } from "@/components/custom/wrapper.tsx";
import { UserContext } from "@/contexts/user-context";

function App() {
    const [count, setCount] = useState(0);

    const val = useContext(UserContext);

    return (
        <AppWrapper>
            <div>
                <a
                    className="flex h-16 items-center justify-center text-3xl font-semibold"
                    href="/"
                >
                    <div className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Freecer
                    </div>
                </a>
            </div>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
            User: {val?.sessionData?.username}
            <div className={"flex flex-col ml-4 mt-4 space-y-4"}>
                <Input
                    className={"max-w-xs"}
                    type="text"
                    placeholder="Wpisz coś"
                />
                <Input
                    variant={"secondary"}
                    type="text"
                    placeholder="Wpisz coś"
                />
                <Input bordered type="text" placeholder="Wpisz coś" />
                <Input bordered disabled type="text" placeholder="Wpisz coś" />
            </div>
        </AppWrapper>
    );
}

export default App;
