import axios from "axios";
import { useState, useEffect } from "react";
import './Placement.css';

export default function Placement() {
    const [result, setResult] = useState(null);

    useEffect(() => {
        axios.get('http://localhost:8081/display').then((response) => {
            console.log(response.data);
            setResult(response.data);
        });
    }, []);

    function handleDelete(event) {
        const studentId = event.currentTarget.getAttribute("student");
        alert(studentId);
        axios.delete('http://localhost:8081/delete', {
            params: {
                "id": studentId
            }
        }).then((response) => {
            console.log(response.data);
            // Update state or reload data after deletion
        });
    }

    return (
        <div className="placement-container">
            {result === null ? (
                <div>The Placement Data is Not Available</div>
            ) : (
                <div>
                    <h2>The Placement Data is Given Below</h2>
                    <table className="placement-table">
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Placement Status</th>
                                <th>Company Name</th>
                                <th>CTC</th>
                                <th>Delete Button</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result.map((user, index) => (
                                <tr key={index}>
                                    <td>{user.sid}</td>
                                    <td>{user.sname}</td>
                                    <td>{user.pstatus}</td>
                                    <td>{user.scompany}</td>
                                    <td>{user.sctc}</td>
                                    <td>
                                        <button className="delete-button" onClick={handleDelete} student={user.sid}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
}
