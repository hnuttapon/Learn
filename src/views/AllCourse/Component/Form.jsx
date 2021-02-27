import React,{useState} from "react";
import "./Input.css";


function CourseInput(props) { 

    const [note, setNote] = useState({
        title: "",
      });

    function handleChange(event) {
        const { name, value } = event.target;
    
        setNote(prevNote => {
          return {
            ...prevNote,
            [name]: value
          };
        });
    }

  return (
    <div className="row" style={{marginLeft:'auto',marginRight:'auto'}}>
        <div className="col-xl-10">
            <form className="create-note">
                <input
                name={props.name}
                onChange={handleChange}
                placeholder={props.placeholder}
                value={props.value}
                />
            </form>
        </div>
        <div className="col-xl-2" style={{position:'relative',top:'3px'}}>
            <img width="35px" height="35px" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTExOS4wODYgMzIwLjE4M2MxOC4yMjUgMjkuNTQzIDQzLjE4MyA1NC41MDIgNzIuNzMxIDcyLjczMWwtMTA0LjA5NiAxMDQuMDk2Yy0yMC4wODMgMjAuMDgzLTUyLjY0NCAyMC4wODMtNzIuNzI3IDAtLjAwMS0uMDAyLS4wMDItLjAwMy0uMDA0LS4wMDQtMjAuMDgzLTIwLjA4My0yMC4wODMtNTIuNjQ0IDAtNzIuNzI3em0xODkuMDM0LTMyMC4yNTVjMTEyLjU2NCAwIDIwMy45NTIgOTEuMzg4IDIwMy45NTIgMjAzLjk1MnMtOTEuMzg4IDIwMy45NTEtMjAzLjk1MiAyMDMuOTUxLTIwMy45NTEtOTEuMzg3LTIwMy45NTEtMjAzLjk1MSA5MS4zODctMjAzLjk1MiAyMDMuOTUxLTIwMy45NTJ6bTAgNzAuMTQ0Yy03My44NSAwLTEzMy44MDcgNTkuOTU3LTEzMy44MDcgMTMzLjgwOCAwIDczLjg1IDU5Ljk1NyAxMzMuODA3IDEzMy44MDcgMTMzLjgwNyA3My44NTEgMCAxMzMuODA4LTU5Ljk1NyAxMzMuODA4LTEzMy44MDcgMC03My44NTEtNTkuOTU3LTEzMy44MDgtMTMzLjgwOC0xMzMuODA4eiIgZmlsbD0iI2ZmZmZmZiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9wYXRoPjwvZz48L2c+PC9zdmc+" />
        </div>
    </div>

  );
}

export default CourseInput;
