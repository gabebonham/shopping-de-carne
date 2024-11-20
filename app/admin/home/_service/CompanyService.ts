import Branch from "@/model/BranchModel";






async function getBranches(){
    return [new Branch('1', 'Porto Alegre'), new Branch('2', 'Santa Catarina')]
}


export {
    getBranches
}