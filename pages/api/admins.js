// import {mongooseConnect} from "@/lib/mongoose";
// import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
// import {Admin} from "@/models/Admin";

// export default async function handle(req,res){
//     await mongooseConnect();
//     await isAdminRequest(req, res);

//     if (req.method === 'POST') {
//         const {email} = req.body;
        
//         res.json(await Admin.create({email}));
        
//       }
// }

import {mongooseConnect} from "@/lib/mongoose";
import {isAdminRequest} from "@/pages/api/auth/[...nextauth]";
import {Admin} from "@/models/Admin";

export default async function handle(req, res) {
  await mongooseConnect();
  await isAdminRequest(req, res);

  if (req.method === 'POST') {
    const {email,password} = req.body;
    if (await Admin.findOne({email})) {
      res.status(400).json({message:'admin already exists!'});
    } else {
      res.json(await Admin.create({email,password}));
    }
  }

  if (req.method === 'DELETE') {
    const {_id} = req.query;
    await Admin.findByIdAndDelete(_id);
    res.json(true);
  }

  if (req.method === 'GET') {
    res.json( await Admin.find() );
  }
}
