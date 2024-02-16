var fs=require("fs");

const routeHandler=(request,response)=>{
    if(request.url =='/')
    {
     fs.readFile("index.html",(eror,html)=>{
   response.writeHead(200,{"Content-Type":"text/html"});
   response.write(html); 
   response.end();
   
     });
   
   
    }
    else if(request.url =="/blogs"){
     
           fs.readFile("blogs.html",(eror,html)=>{
             response.writeHead(200,{"Content-Type":"text/html"});
             response.write(html); 
             response.end();
             
               });
       
    }
    else if(request.url =="/create" && request.method=="POST"){ 
     const data=[];
     request.on("data",(chunk)=>{data.push(chunk)})
     request.on("end",()=>{
       const result =Buffer.concat(data).toString()
       const parseData=result.split("=")[1]
       fs.appendFile("blogs.txt",parseData,(err)=>{
         if(err){
           console.log(err);
         }
         else{
           response.statusCode=302;
           response.setHeader("Location","/");
           response.end();
         }
       })
   
   
     });
          
       
    }
    else if(request.url =="/create"){
     
     fs.readFile("create.html",(eror,html)=>{
       response.writeHead(200,{"Content-Type":"text/html"});
       response.write(html); 
       response.end();
       
         });
       
    }
   
    else{
     fs.readFile("404.html",(eror,html)=>{
       response.writeHead(200,{"Content-Type":"text/html"});
       response.write(html); 
       response.end();
       
         });
       
    }
     
    
   }
   module.exports=routeHandler;