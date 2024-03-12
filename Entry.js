import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { MenuItem, Select } from '@mui/material';
import './Entry.css';

export default function Entry() {
    const [sid, setSid] = useState('');
    const [sname, setSname] = useState('');
    const [pstatus, setPstatus] = useState('select');
    const [scompany, setScompany] = useState('');
    const [sctc, setSctc] = useState('');

    const handleSubmit = () => {
        console.log({
            sid: sid,
            sname: sname,
            pstatus: pstatus,
            scompany: scompany,
            sctc: sctc
        });

        axios.post('http://localhost:8081/entry', {
            sid: sid,
            sname: sname,
            pstatus: pstatus,
            scompany: scompany,
            sctc: sctc
        }).then((response) => {
            console.log(response.data);
        });
    };

    const handleUpdate = () => {
        axios.put('http://localhost:8081/entry', {
            sid: sid,
            sname: sname,
            pstatus: pstatus,
            scompany: scompany,
            sctc: sctc
        }).then((response) => {
            console.log(response.data);
        });
    };

    return (
        <div className="entry-container">
            <label htmlFor="idsid">Student ID:</label>
            <input type="text" name="sid" id="idsid" value={sid} onChange={(e) => setSid(e.target.value)} /><br/><br/>

            <label htmlFor="idsname">Student Name:</label>
            <input type="text" name="sname" id="idsname" value={sname} onChange={(e) => setSname(e.target.value)} /><br/><br/>

            <label htmlFor="idstatus">Placement Status:</label>
            <Select
                id="idstatus"
                value={pstatus}
                onChange={(e) => setPstatus(e.target.value)}
            >
                <MenuItem value="select">Select Placement Status</MenuItem>
                <MenuItem value="Placed">Placed</MenuItem>
                <MenuItem value="Not Placed">Not Placed</MenuItem>
            </Select><br/><br/>

            <label htmlFor="idscompany">Company Name:</label>
            <input type="text" name="scompany" id="idscompany" value={scompany} onChange={(e) => setScompany(e.target.value)} /><br/><br/>

            <label htmlFor="idsctc">CTC:</label>
            <input type="text" name="sctc" id="idsctc" value={sctc} onChange={(e) => setSctc(e.target.value)} /><br/><br/>

            <button className="action-button" onClick={handleSubmit}>Save Data</button>
            
            <button className="action-button" onClick={handleUpdate}>Update Data</button>
        </div>
    );
}
