import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { CCallout } from '@coreui/react';

export default function FormControlLabelPosition() {
    return (
        <div>
            <div className="row paddingTop">
                <div className="col-xl-3 col-lg-3 paddingLeft">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <CCallout color="info" style={{ marginBottom: '0px', clear: 'both' }}>
                                <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>ประเภทคอร์ส</h3>
                            </CCallout>
                        </FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="Online"
                                control={<Checkbox color="primary" />}
                                label="Online"
                            />
                            <FormControlLabel
                                value="Classroom"
                                control={<Checkbox color="primary" />}
                                label="Classroom"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
                <div className="col-xl-9 col-lg-9">
                    <FormControl component="fieldset">
                        <FormLabel component="legend">
                            <CCallout color="info" style={{ marginBottom: '0px', clear: 'both' }}>
                                <h3 style={{ color: 'black', fontWeight: '400', "font-family": "Kanit, sans-serif" }}>ประเภทคอร์ส</h3>
                            </CCallout>
                        </FormLabel>
                        <FormGroup aria-label="position" row>
                            <FormControlLabel
                                value="logistic"
                                control={<Checkbox color="primary" />}
                                label="โลจิสติก"
                            />
                            <FormControlLabel
                                value="engineer"
                                control={<Checkbox color="primary" />}
                                label="วิศวกรรม"
                            />
                            <FormControlLabel
                                value="law"
                                control={<Checkbox color="primary" />}
                                label="กฏหมาย"
                            />
                            <FormControlLabel
                                value="finance"
                                control={<Checkbox color="primary" />}
                                label="การเงิน"
                            />
                            <FormControlLabel
                                value="computer"
                                control={<Checkbox color="primary" />}
                                label="คอร์มพิวเตอร์"
                            />
                            <FormControlLabel
                                value="allCatagory"
                                control={<Checkbox color="primary" />}
                                label="หมวดหมู่ทั้งหมด"
                            />
                        </FormGroup>
                    </FormControl>
                </div>
            </div>
        </div>
    );
}
