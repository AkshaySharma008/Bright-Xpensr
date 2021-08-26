import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import './due-expense.css'
import dateFormat from 'dateformat'


const DueExpenses = () => {
    const [limit, setLimit] = useState(0);
    const [selectedBill, setSelectedBill] = useState({});
    const {expenseList: list} = useSelector((state)=> state.expenses);
    const sortedDataList = [...list];
    sortedDataList.sort((a, b) => a.amount - b.amount);

    useEffect(() => {
      const list = {};
      let totalSum = 0;
      sortedDataList.forEach((element) => {
        if (element.amount <= limit - totalSum) {
          list[element.id] = true;
          totalSum += element.amount;
        }
      });
      setSelectedBill(list);
    }, [limit]);

    const handleMonthlyBudget = (e) => {
        setLimit(e.target.value);
    }

    return (
        <div className="due-expenses">
            <div className="input-bill-amount">
                <label className="input-bill-amount-label">Enter your Monthly Budget</label>
                <input 
                    type="Number"
                    className="input-bill-amount-field"
                    placeholder=" Budget (INR)"
                    value={limit}
                    onChange={handleMonthlyBudget}
                />
            </div>
            <div className="bills-information">
            <div className='color'></div>
            <span>Highlighed Bills That Can Be Paid</span>
            </div>
            <div className="table-container">
            <div className="table-header">
                <div className="table">
                <div className="table-row">
                    <div className="table-column expense-id-head">
                    <div className="">ID</div>
                    </div>
                    <div className="table-column date-head">
                    <div className="">DATE</div>
                    </div>
                    <div className="table-column category-head">
                    <div className="">CATEGORY</div>
                    </div>
                    <div className="table-column description-head">
                    <div className="">DESCRIPTION</div>
                    </div>
                    <div className="table-column amount-head">
                    <div className="">AMOUNT (INR)</div>
                    </div>
                </div>
                </div>
            </div>

            <div className="table-body">
        <div className="table">
          {list.length ? (
            list.map((data, i) => {
              return(
                <div key={i} className="table-row">
                <div className='table-column expense-id'>
                <div className="">{i+1}</div>
              </div>
              <div className={selectedBill[data.id] ? 'table-column date highlighted' : 'table-column date'}>
                <div className="">{dateFormat(data.createdAt, "dd-mm-yyyy")}</div>
              </div>
              <div className="table-column category">
                <div className="">{data.category}</div>
              </div>
              <div className="table-column description">
                <div className="">{data.description}</div>
              </div>
              <div className="table-column amount">
                <div className="">{data.amount}</div>
              </div>
              </div>
              )
            }) 
          ):(
            <div className="empty-table">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/searching-in-box-3428236-2902705.png"
                className="empty-image"
                alt="Table Empty"
              />
              <p>
                Uh Oh! Looks like the table is empty. Change your search
                filters or maybe we don't have such an expense :(
              </p>
            </div>
          )}
        </div>
      </div>
            </div>
        </div>
    )
}

export default DueExpenses