import styled from 'styled-components';

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`;
export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 400px;
  }
`;
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  padding: 20px 0 10px 0;
  overflow: hidden;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  background: #f7f7f7;
  float: left;
  height: 32px;
  line-height: 32px;  
  margin-left: 18px;
  margin-bottom: 18px;
  font-size: 14px;
  color: #000;
  paddiing-right: 10px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic {
    display: block;
    float: left;
    text-align-last:justify;
    margin-right: 10px;
    width: 34px;
    height: 32px;
  }
`;
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 150px;
    height: 120px;
    float: right;
    border-radius;
    vertical-align: middle;
  }
`;
export const ListInfo = styled.div`
  width: 460px;
  float: left;
  .title {
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
    line-height: 27px;
    font-size: 19px;
    font-weight: bold;
    letter-spacing: 0;
    color: #333;
  }
  .desc {
    margin-top: 4px;
    line-height: 22px;
    font-size: 15px;
    color: #999;
    text-align: justify;
    font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
 `;

 export const RecommendItem= styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
 `;

 export const WriterWrapper = styled.div`
  width: 278px;
  font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
 `;

 export const WriterTitle = styled.div`
 text-align: left;
 font-size: 14px;
 color: #969696;
 margin: 0 0 20px;
 font-weight: bold;
`

export const WriterItem = styled.div`
 margin-top: 15px;
 overflow: hidden;
 font-family: sohne, "Helvetica Neue", Helvetica, Arial, sans-serif;
 .pic {
   float: left;
   width: 48px;
   height: 48px;
   margin-right: 10px;
   display: block;
   border: 1px solid #ddd;
   border-radius: 50%;
 }
 .nickname {
   padding: 5px;
   margin-right: 60px;
   font-size: 14px;
 }
 .total {
   margin-top: 2px;
   font-size: 12px;
   color: #969696;
 }
 .follow {
   float: right;
   margin-top: 5px;
   padding: 0;
   font-size: 13px;
   color: #42c02e;
 }
`

 export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  margin: 30px 0;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 40px;
  line-height: 60x;
  text-align: center;
  border: 1px solid  #ccc;
  font-size: 14px;
  padding-top: 16px;
`;
