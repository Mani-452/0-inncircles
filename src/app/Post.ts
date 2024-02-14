export interface Post{
    _id:string
    userid:{
        userName:string
    }
    title:string
    desc:string
    comments?:[
        {
            comment:string
            userid:{
                userName:string
            }
            updatedAt:string
        }
    ]
}