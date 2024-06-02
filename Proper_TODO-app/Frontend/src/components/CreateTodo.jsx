import React from 'react';

export function CreateTodo() {
    const [title, setTitle] = React.useState("");
    const [desc, setDesc] = React.useState("");

    return (
        <div>
            <input id='title' type="text" placeholder="Title" onChange={(e) => {
                const value = e.target.value;
                setTitle(value);
            }} name="title" />
            <br />
            <input id='desc' type="text" placeholder="Description" onChange={(e) => {
                const value = e.target.value;
                setDesc(value);
            }} name="desc" />
            <br />

            <button onClick={() => {
                // if we use axios library then it becomes much more easier to send data to the backend.
                fetch("http://localhost:3000/todo", {
                    method: 'POST',
                    // body: {
                    //     title: document.getElementById('title').innerHTML,
                    //     desc: document.getElementById('desc').innerHTML,
                    // }
                    body: JSON.stringify({ //we have to convert this object into JSON string Fetch dont do that for us we have to do it manually by JSON.stringify.
                        title: title,
                        desc: desc,
                    }),
                    //app.use(express.json()); checks header and cchecks if input is josn if yes thn only it parse else it ignores it.
                    headers: {
                        'Content-type': 'application/json'
                    }
                })
                    .then(async function (res) {
                        const data = await res.json();
                        console.log(title, desc);
                        console.log(data);
                        alert("Todo Added Successfully");
                    })
            }} >Add Todo</button>
        </div>
    )
}