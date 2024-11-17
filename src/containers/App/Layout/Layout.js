// import React from "react";
// import { StyledHeader, IconsWrapper } from "./Layout.styles";
// import {
//     TwitterOutlined,
//     SearchOutlined,
//     ShoppingCartOutlined,
//     InstagramOutlined,
//     FacebookOutlined,
//     AliwangwangOutlined,
// } from "@ant-design/icons";

// const Layout = () => (
//     <StyledHeader title="Glay Shop">
//         <div>
//             <IconsWrapper>
//                 <AliwangwangOutlined />
//             </IconsWrapper>
//             <p>Glay Shop</p>
//         </div>
//         <div>
//             <IconsWrapper>
//                 <TwitterOutlined />

//                 <FacebookOutlined />

//                 <InstagramOutlined />
//             </IconsWrapper>
//         </div>
//         <div>
//             <IconsWrapper>
//                 <SearchOutlined />

//                 <ShoppingCartOutlined />
//             </IconsWrapper>
//         </div>
//     </StyledHeader>
// );

// export default Layout;


import React from "react";
import { StyledHeader, IconsWrapper } from "./Layout.styles";
import { EllipsisOutlined, HomeOutlined } from "@ant-design/icons";  
const Layout = () => (
    <StyledHeader>
        <div>
            <IconsWrapper>
                <EllipsisOutlined style={{ fontSize: '100px', color: 'white' }} />  
            </IconsWrapper>
        </div>
        <div className="homePageWrapper">
            <IconsWrapper>
                <HomeOutlined style={{ fontSize: '24px', color: 'white' }} /> 
                <p style={{ color: 'white', marginLeft: '10px' }}>Home Cinema</p>  
            </IconsWrapper>
        </div>
    </StyledHeader>
);

export default Layout;

