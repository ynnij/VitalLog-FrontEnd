const LogTable = ({userlog}) => {
    const tbodyTags = userlog && userlog.map((log, idx)=>{
        return <tr key={log.seq} className="odd:bg-white even:bg-gray-50 border-b ">
                        <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                            {log.exerDate}
                        </th>
                        <td className="px-6 py-4">
                            {log.exerTime} 분
                        </td>
                        <td className="px-6 py-4">
                            {log.exercise}
                        </td>
                        <td className="px-6 py-4">
                            {log.kcal} kcal
                        </td>
                        
                    </tr>
                    
    })
    return (
        <div className="relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Time(min)
                        </th>
                        <th scope="col" className="px-6 py-3">
                            exercise
                        </th>
                        <th scope="col" className="px-6 py-3">
                            kcal
                        </th>

                    </tr>
                </thead>
                <tbody>
                    
                    {tbodyTags}
                   
                </tbody>
            </table>
        </div>
    )
}

export default LogTable
