let serviceCredit = document.querySelector(".item-service-credit");
let serviceGarantee = document.querySelector(".item-service-garantee");
let serviceDelivery = document.querySelector(".item-service-delivery");
let contentCredit = document.querySelector(".item-service-content-3");
let contentGarantee = document.querySelector(".item-service-content-2");
let contentDelivery = document.querySelector(".item-service-content-1");
let decoration = document.querySelector(".services-content-decoration");

serviceCredit.addEventListener("click", function(){
    if (serviceGarantee.classList.contains("item-service-current")){
serviceGarantee.classList.remove("item-service-current");
serviceCredit.classList.add("item-service-current");
    }else if(serviceDelivery.classList.contains("item-service-current")){
serviceDelivery.classList.remove("item-service-current");
serviceCredit.classList.add("item-service-current");
}
}
)

serviceCredit.addEventListener("click", function(){
    if (contentGarantee.classList.contains("item-service-content-current")){
        contentGarantee.classList.remove("item-service-content-current");
        contentCredit.classList.add("item-service-content-current");
    }else if(contentDelivery.classList.contains("item-service-content-current")){
        contentDelivery.classList.remove("item-service-content-current");
        contentCredit.classList.add("item-service-content-current");
    }
}
)
serviceCredit.addEventListener("click", function(){
    if(decoration.classList.contains("services-content-decoration-1")){
        decoration.classList.remove("services-content-decoration-1");
        decoration.classList.add("services-content-decoration-3");
    }else if(decoration.classList.contains("services-content-decoration-2")){
        decoration.classList.remove("services-content-decoration-2");
        decoration.classList.add("services-content-decoration-3");
    }
}
)

serviceGarantee.addEventListener("click", function(){
    if (serviceCredit.classList.contains("item-service-current")){
serviceCredit.classList.remove("item-service-current");
serviceGarantee.classList.add("item-service-current");
    }else if(serviceDelivery.classList.contains("item-service-current")){
serviceDelivery.classList.remove("item-service-current");
serviceGarantee.classList.add("item-service-current")
    }
}
)

serviceGarantee.addEventListener("click", function(){
    if(contentCredit.classList.contains("item-service-content-current")){
        contentCredit.classList.remove("item-service-content-current");
        contentGarantee.classList.add("item-service-content-current");
    } else if(contentDelivery.classList.contains("item-service-content-current")){
        contentDelivery.classList.remove("item-service-content-current");
        contentGarantee.classList.add("item-service-content-current");
    }
}
)

serviceGarantee.addEventListener("click", function(){
    if(decoration.classList.contains("services-content-decoration-1")){
        decoration.classList.remove("services-content-decoration-1");
        decoration.classList.add("services-content-decoration-2");
    }else if(decoration.classList.contains("services-content-decoration-3")){
        decoration.classList.remove("services-content-decoration-3");
        decoration.classList.add("services-content-decoration-2");
    }
}
)


serviceDelivery.addEventListener("click", function(){
    if (serviceGarantee.classList.contains("item-service-current")){
serviceGarantee.classList.remove("item-service-current");
serviceDelivery.classList.add("item-service-current");
    }else if(serviceCredit.classList.contains("item-service-current")){
serviceCredit.classList.remove("item-service-current");
serviceDelivery.classList.add("item-service-current")
    }
}
)

serviceDelivery.addEventListener("click", function(){
    if(contentGarantee.classList.contains("item-service-content-current")){
        contentGarantee.classList.remove("item-service-content-current");
        contentDelivery.classList.add("item-service-content-current");
    } else if(contentCredit.classList.contains("item-service-content-current")){
        contentCredit.classList.remove("item-service-content-current");
        contentDelivery.classList.add("item-service-content-current");
    }
}
)

serviceDelivery.addEventListener("click", function(){
    if(decoration.classList.contains("services-content-decoration-2")){
        decoration.classList.remove("services-content-decoration-2");
        decoration.classList.add("services-content-decoration-1");
    }else if(decoration.classList.contains("services-content-decoration-3")){
        decoration.classList.remove("services-content-decoration-3");
        decoration.classList.add("services-content-decoration-1");
    }
}
)
