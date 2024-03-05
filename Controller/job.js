const jobModel = require("../Models/job");



// TODO: Create job API

const createJob= async (req,res)=>{
    try{
        console.log(req.body);
        // todo:insert data into db for new job db.jobs.insertOne({});
    
         const newJob = new jobModel(req.body);

          const newlyInsertedJob=  await newJob.save();
          console.log(newlyInsertedJob);  // to get the Id of that paricular job we get from here console the newlyInsertedJob...

         res.json({
            success:true,
            message:"job created successfully" + newlyInsertedJob._id,
          });
      }catch(err){
        res.status(400).json({
            success: false,
            message: "something went wrong"
        });

    }
};

//    TODO: Get JOb API

const getJOb= async (req,res)=>{
    
    const jobList = await jobModel.find({});
    console.log(jobList);

        res.json({
          succes:true,
          message:"job find succefully7",
          results:jobList
        })
      

    }
       
    // TODO: Edit job API
    const editJob= async(req,res)=>{
        console.log(req.body);
        const updateRecord = await jobModel.updateOne({_id:req.body._id},{$set:req.body});
        
        // await jobModel.updateMany({title:req.body.title},{$set:req.body});
        // jobModel.findByIdAndUpdate(req.body._id,req.body);
        res.json({
            success:true,
            message:"JOb edited successfully",
        });
    
    };

    // TODO: Delete job API

    const deleteJob= async(req,res)=>{
        try{
            await jobModel.findByIdAndDelete(req.body._id);
            // jobModel.deleteOne({_id:req.body._id})
            res.json({
                success:true,
                message:"job deleted successfully",
            });

        }catch(err){
            console.log(err);
            res.status(500).json({
                succes:false,
                message:"something wents wrong"
            })
        }

    };


module.exports={
    createJob,
    getJOb,
    editJob,
    deleteJob,
};