/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import { Link, useNavigate, useParams } from "react-router-dom";

import Loader from "../components/Loader";
import ThanksPopup from "../components/ThanksPopup";
import { useMemo } from "react";
import BackgroundQuestion from "../components/BackgroundQuestion";



function Questions({ apiData }) {

  const [productSatisfection, setProductSatisfection] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [suggestionValue, setSuggestionValue] = useState('');
  const [moneySatisfection, setMoneySatisfection] = useState();
  const [loader, setLoader] = useState(true);
  const [popupLoader, setPopupLoader] = useState(false);

  const [filteredAPIData, setFilteredAPIData] = useState([]);
  const [blurEffect, setBlurEffect] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id)

  const {valuesArry, setValuesArry} = useMemo(()=>{
    return {
        valuesArry: [null, productSatisfection, productPrice, moneySatisfection, suggestionValue],
        setValuesArry: [null, setProductSatisfection, setProductPrice, setMoneySatisfection, setSuggestionValue]
    }
  },[productSatisfection, productPrice, moneySatisfection, suggestionValue])

  const getDataHandler = (e) => {
    const obj = {
      productSatisfection,
      productPrice,
      moneySatisfection,
      suggestionValue
    }

    for(let x in obj){
      localStorage.setItem(x, obj[x]);
    }

    e.preventDefault();

    setTimeout(()=>{
      setPopupLoader(true);
    },500);

    setTimeout(()=>{
      navigate('/');
    },5000);
  }

  const activeBgColor = (e) => {
    const lables = document.querySelectorAll(".inputOps");
    for (let x of lables) {
      x.id = null;
    }
    e.target.parentElement.id = "active";

    setProductSatisfection(e.target.value);
  }

  const activeBgColor2 = (e) => {
    const lables2 = document.querySelectorAll(".inputOps-2");
    for (let x of lables2) {
      x.id = null;
    }
    e.target.parentElement.id = "active";

    setProductPrice(e.target.value);
  }

  const moneySatisfectionHandler = (e) => {
    setMoneySatisfection(e.target.value);
    document.querySelector(".silderValueDisplay").innerHTML = e.target.value;
  }

  const skipBtnHandler = () => {
    if (valuesArry[id]) {
      setValuesArry[id](null);
    }
  }

  const nextBtnHandler = (e) => {
    if (!blurEffect) {
      e.preventDefault()
    }
    setBlurEffect(false);
  }

  useEffect(() => {
    const filterAPIData = apiData.filter(item => { return item.id == id });
    setFilteredAPIData(filterAPIData);

    if (valuesArry[id]) {
      setBlurEffect(true);
    }

    localStorage.setItem("id", id);
    const localId =[ localStorage.getItem("id")];
    let Arry = [];
    Arry = [...Arry, localId]
    console.log(Arry)

    // For loader
    setTimeout(()=>{
      setLoader(false);
    },2000);

  }, [id, apiData, productSatisfection, productPrice, moneySatisfection, suggestionValue, valuesArry])

  return (
    <>
    { loader ?  (<Loader />) :
    (
      <div className="relative w-full h-[100vh] bg-[#FAF9F6] flex justify-center items-center">
        <BackgroundQuestion />
        {popupLoader && <ThanksPopup />}
        {
          filteredAPIData.map((item, i) => {
            return (
              <>
                <form key={i} className="absolute bg-[#FBFCF8] rounded-md shadow-lg w-[45vw] max-w-[615px] py-3 text-center content-center" onSubmit={getDataHandler}>
                  <h1 className="text-left text-sm md:text-xl font-semibold w-[90%] mx-auto my-3">{item.ques}</h1>

                  {/* Input for satisfection of product rating */}
                  {id == 1 ?
                    (<div className="my-5 flex justify-around">
                      <span className="inputOps w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="1" name="product-satisfection" onClick={(e) => { activeBgColor(e) }} />1</span>
                      <span className="inputOps w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="2" name="product-satisfection" onClick={(e) => { activeBgColor(e) }} />2</span>
                      <span className="inputOps w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="3" name="product-satisfection" onClick={(e) => { activeBgColor(e) }} />3</span>
                      <span className="inputOps w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="4" name="product-satisfection" onClick={(e) => { activeBgColor(e) }} />4</span>
                      <span className="inputOps w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="5" name="product-satisfection" onClick={(e) => { activeBgColor(e) }} />5</span>
                    </div>) : null}

                  {/* Input for fairness of Price of the product rating */}
                  {item.id == 2 ?
                    (<div className="my-5 flex justify-around">
                      <span className="inputOps-2 w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="1" name="product-price" onClick={(e) => { activeBgColor2(e) }} />1</span>
                      <span className="inputOps-2 w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="2" name="product-price" onClick={(e) => { activeBgColor2(e) }} />2</span>
                      <span className="inputOps-2 w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="3" name="product-price" onClick={(e) => { activeBgColor2(e) }} />3</span>
                      <span className="inputOps-2 w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="4" name="product-price" onClick={(e) => { activeBgColor2(e) }} />4</span>
                      <span className="inputOps-2 w-8 h-8 text-xl md:w-[50px] md:h-[50px] md:text-3xl"><input type="radio" value="5" name="product-price" onClick={(e) => { activeBgColor2(e) }} />5</span>
                    </div>) : null}

                  {/* Input for money satisfextion of the product rating */}
                  {item.id == 3 ?
                    (<div className="w-[90%] mx-auto flex justify-between items-center flex-col gap-4 py-5">
                      <input className="slider w-[90%] cursor-pointer" name="product-price" type="range" min="1" max="10" step='0.5' value={moneySatisfection} onChange={(e) => { moneySatisfectionHandler(e) }} />
                      <div className="silderValueDisplay w-20 inline-block text-white bg-slate-500 rounded-full text-2xl">5.5</div>
                    </div>) : null}

                  {/* Input for improvement of service suggestion */}
                  {item.id == 4 ?
                    (<div>
                      <textarea className="w-[90%] h-32 resize-none outline-none border border-zinc-500 p-2" name="improvement-suggestion" type="text" placeholder="Enter suggestion for restudent improvement..." value={suggestionValue} onChange={(e) => { setSuggestionValue(e.target.value) }}></textarea>
                    </div>) : null}

                  {/* Skip, Next and Submit Buttons */}
                  <div className="w-[60%] my-3 mx-auto flex justify-center gap-3 md:gap-5">
                    {item.id != 4 ?
                      (<Link to={`/ques/${id == apiData.length ? apiData.length : Number(id) + 1}`} className="custom-btn skip-btn text-sm md:text-lg" onClick={() => { skipBtnHandler() }}>Skip</Link>) : null
                    }
                    {
                      item.id != 4 ?
                        (<Link to={`/ques/${Number(id) + 1}`} className="custom-btn next-btn text-sm md:text-lg md:py-0 md:px-0 py-1" onClick={(e) => { nextBtnHandler(e) }} style={!blurEffect ? { opacity: '.5', } : { opacity: "1" }}><span>Next</span></Link>) : null
                    }

                    {
                      item.id == 4 ?
                        (<button className="bg-green-500 w-24 rounded-3xl py-2" type="submit">Submit</button>) : null
                    }
                  </div>
                </form>

                {/* Privous Question and Next Question Buttons */}
                <div className="absolute top-0 w-full flex justify-between items-center p-10">
                  <Link to={`/ques/${id == 1 ? 1 : Number(id) - 1}`} className="btn-prev-next">Privious Question</Link>
                </div>

              </>
            )
          })
        }
      </div>
    )
    }
      
    </>
  )
}

export default Questions