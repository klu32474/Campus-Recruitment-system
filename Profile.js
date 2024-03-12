import axios from 'axios';
import { useState } from 'react';
import './Profile.css';

export default function Profile() {
    const [result, setResult] = useState(null);

    if (result === null) {
        axios.get('http://localhost:8081/show').then((response) => {
            console.log(JSON.stringify(response.data));
            setResult(response.data);
        });

        return (
            <div className="profile-container">
                <p>There is No Data to Display</p>
            </div>
        );
    } else {
        return (
            <div className="profile-container">
                <p>The User Data is Given Below</p>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {result.map((user, index) => (
                            <tr key={index}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
