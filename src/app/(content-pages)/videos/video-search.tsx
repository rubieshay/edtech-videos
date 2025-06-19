import { FormEvent, useState } from "react";

export default function VideosSearch({ setSearchedUserID }: {setSearchedUserID: React.Dispatch<React.SetStateAction<string | null>>}) {
    // VideosSearch allows the user to find videos from a user_id
    const [searchboxValue, setSearchboxValue] = useState<string>("");

    function handleSearch(event: FormEvent) {
        event.preventDefault();
        if (searchboxValue === "") {
            return;
        }
        // set the actual searched value to the current value (lowercased) and clear the searchbox
        setSearchedUserID(searchboxValue.toLowerCase());
        setSearchboxValue("");
    }

    return (
        <search>
            <form onSubmit={(event) => handleSearch(event)}>
                <label htmlFor="user-search">Find Lessons by Username</label>
                <div>
                    <input id="user-search" type="text" placeholder="Search..." aria-required="true" autoComplete="off" value={searchboxValue} onChange={(event) => setSearchboxValue(event.target.value)}/>
                    <button className={"search-button material-symbols material-symbols-outlined" + (searchboxValue === "" ? " button-disabled" : "")}>search</button>
                </div>
            </form>
        </search>
    );
}