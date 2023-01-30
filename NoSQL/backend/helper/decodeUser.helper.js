import jsonwebtoken from "jsonwebtoken";

const decodeUser = (token) => {
   try {
        const decodedVal =  jsonwebtoken.decode(token,{complete:true});
        return decodedVal.payload.userId;
   } catch (error) {
        console.log("Decode Error : ",error)
   }
}

export default decodeUser;