import React from 'react'

export default function InputFieldsAndButtons() {
    return (
        <>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" aria-describedby="emailHelp" />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <textarea class="form-control" id="description" rows="3"></textarea>
            </div>

            <button id="add" class="btn btn-success">Add to list</button>
            <button id="clear" class="btn btn-success" onclick="clearStorage()">Clear list</button>
        </>
    )
}
