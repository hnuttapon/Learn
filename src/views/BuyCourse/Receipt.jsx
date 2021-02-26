import React from "react";
import Topic from "../Course/CourseCard/Component/Topic";
import { makeStyles } from "@material-ui/core/styles";
import "./BuyCourse.css";
import Header from "../Header/Header";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CardBank from "./Component/CardBank";

const TAX_RATE = 0.07;

const useStyles = makeStyles((theme) => ({
  detailFont: {
    color: "white",
    "font-family": "Kanit, sans-serif",
    fontWeight: "450",
    fontSize: "20px",
    marginTop: "20px",
    position: "relative",
    top: "12px",
  },
  sectionButton: {
    "font-family": "Kanit, sans-serif",
    color: "white",
    fontSize: "20px",
    fontWeight: "500",
    width: "95%",
    textDecoration: "none",
  },
  table: {
    minWidth: 700,
  },
}));

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
  }
  
  function priceRow(qty, unit) {
    return qty * unit;
  }
  
  function createRow(desc, qty, unit) {
    const price = priceRow(qty, unit);
    return { desc, qty, unit, price };
  }
  
  function subtotal(items) {
    return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
  }
  
  const rows = [
    createRow('Storytelling for Project Pitching', 2, 2999),
  ];
  
  const invoiceSubtotal = subtotal(rows);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

const Receipt = (props) => {
  const classes = useStyles();
  return (
    <div style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/cubes.png")'}}>
      <Header bgColor='#63B995'/>
      <div>
        <div className="container">
          <div className="row margin5">
            <div
              className="col-xl-8 col-lg-8 col-md-8 col-sm-12"
              style={{ paddingRight: "0%", paddingLeft: "0%" }}
            >
              <img
                alt="Online"
                className="courseImg"
                src={
                  "https://image.freepik.com/free-vector/gradient-geometric-background_52683-54352.jpg"
                }
              />
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 courseDetail">
              <h2
                style={{
                  color: "#235789",
                  "font-family": "Kanit, sans-serif",
                  fontWeight: "450",
                  fontSize: "20px",
                  marginTop: "20px",
                }}
              >
                Online
              </h2>
              <Topic
                name="Storytelling for Project Pitching"
                fontSize="30px"
                color="black"
                fontWeight="500"
              />
              <h2
                style={{
                  color: "black",
                  "font-family": "Kanit, sans-serif",
                  fontWeight: "300",
                  fontSize: "20px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                }}
              >
                Pitch งานเข้าเป้า แค่เล่าเรื่องเป็น
              </h2>
              <Topic
                name="4,990.00 บาท"
                marginLeft="0.1%"
                fontSize="30px"
                color="black"
                fontWeight="500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <center>
        <Topic name="ช่องทางการชำระเงิน" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto"/>
        <div className="row">
            <div className="col-xl-4">          
                <CardBank account="054-X-XXXXX-X" branch="ตลาดพลู" img="https://assets.moneyguru.co.th/blog/th_TH/wp-content/uploads/2020/02/%E0%B9%81%E0%B8%88%E0%B8%81%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B8%8A%E0%B8%B5%E0%B8%A7%E0%B8%B4%E0%B8%95%E0%B9%82%E0%B8%84%E0%B8%A7%E0%B8%B4%E0%B8%94-19-%E0%B8%9F%E0%B8%A3%E0%B8%B5.png"/>
            </div>
            <div className="col-xl-4">
                <CardBank account="058-X-XXXXX-X" branch="ตลาดพลู" img="https://www.matichon.co.th/wp-content/uploads/2020/04/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B9%84%E0%B8%97%E0%B8%A2%E0%B8%9E%E0%B8%B2%E0%B8%93%E0%B8%B4%E0%B8%8A%E0%B8%A2%E0%B9%8C.jpg"/>
            </div>
            <div className="col-xl-4">
                <CardBank account="155-X-XXXXX-X" branch="ตลาดพลู" img="https://www.thairath.co.th/media/HCtHFA7ele6Q2dUK3zFOTjoPDX29CBVDMs0YEZd0e6L7sICJ2fm3O2NBkweRpo6F9J.webp"/>
            </div>
        </div>
        
        <Topic name="ข้อมูลผู้เข้าอบรม" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto"/>
        <Topic name="รายละเอียดการจอง" fontSize="21px" color="black" fontWeight="400" marginTop="10px" marginLeft="auto" marginRight="auto"/>
        </center>
        <Topic name="หมายเลขการสั่งซื้อ : #90157884" fontSize="30px" color="black" fontWeight="500" marginTop="40px" marginLeft="auto" marginRight="auto"/>
        <TableContainer component={Paper} style={{marginTop:'15px'}}>
          <Table className={classes.table} aria-label="spanning table">
            <TableHead>
              <TableRow style={{backgroundColor:'#CFCCD6'}}>
                <TableCell align="center" colSpan={3}>
                  หลักสูตร
                </TableCell>
                <TableCell align="right">ราคา</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>รายละเอียด</TableCell>
                <TableCell align="right">ปริมาณ</TableCell>
                <TableCell align="right">ราคาต่อหน่วย</TableCell>
                <TableCell align="right">บาท</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.desc}>
                  <TableCell>{row.desc}</TableCell>
                  <TableCell align="right">{row.qty}</TableCell>
                  <TableCell align="right">{row.unit}</TableCell>
                  <TableCell align="right">{ccyFormat(row.price)}</TableCell>
                </TableRow>
              ))}

              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>รวมเป็นเงิน</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>ภาษี (7%)</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>รวมทั้งสิ้น</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>

        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'30px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          เงื่อนไข
        </h2>
        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          -การตกลงและยินยอมในการจองเกิดขึ้นโดยท่าน ซึ่งท่านได้ยอบรับรายละเอียด ก่อนทำการจองแล้ว
        </h2>
        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          -ท่านตองชำระเงินตามวันที่กำหนดในหลักสูตรนั้นๆ หากไม่ชำระภายในกำหนด ให้ถือว่าการจองไม่สมบูรณ์ทุกกรณี
        </h2>
        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          -กรณีชำระเงินแล้ว ให้ถือว่าการจองของท่านสมบูรณ์ และ ไม่สามารถยกเลิกการจอง หรือขอเงินคืนได้ทุกกรณี
        </h2>
        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          -กรณีท่านต้องการเอกสารใบ Quotation/Invoice ตัวจริงเพื่อการทำจ่ายให้ทำการติดต่อ Call Center ของ Thai Polyethylene ในช่องทางต่างๆ
        </h2>
        <h2 style={{color:"black",'font-family': 'Kanit, sans-serif',fontWeight:'300',fontSize:'17px',paddingTop:'5px', paddingBottom:'5px',marginLeft:'2%',textAlign:'left'}}>
          -กรณีบริษัทต้องการหักภาษี ณ ที่จ่าย 3% กรุณาติดต่อที่ Call Center หรือ Line: @ThaiPolyethylene  
        </h2>
      </div>
    </div>
  );
};

export default Receipt;
