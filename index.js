class Automobil{
    constructor(sifra,naziv,url,cena,km,snaga,boja,)
    {
        this.sifra=sifra;
        this.naziv=naziv;
        this.url=url;
        this.cena=cena;
        this.km=km;
        this.snaga=snaga;
        this.boja=boja;
    }
    validation(){
        if(this.sifra === null || this.naziv === "" || this.cena === null) 
        return 0;
        return 1;
    }

      render = function(id){
        var parent = document.getElementById(id);
        if (parent == null) throw new Exception("Roditeljski element nema id:" + id + "Nije nadjen")
        
       var el =document.createElement("div");
        el.style.width = "100%";
        el.style.height="100%";
        var t = "";
        t += "<table  style='border: 1px solid black; width:100%; height:100%;'>";
        t += "<tr style='vertical-align:top; '>";
        t += "<td style='width:200px;horizontal-align:right;'>";
 
        t += "Naziv:" + this.naziv + "<br/>";
        t += "Sifra:" + this.sifra + "<br/>";
        t += "Cena:" + this.cena + "<br/>";
        t += "Km:" + this.km + "<br/>";
        t += "Snaga" + this.snaga + "<br/>";
        t += "Boja" + this.boja + "<br/>";
        t += ""
        t += "</td>";
        t += "</tr></table>";

        el.innerHTML = t;
        parent.appendChild(el);
        

        
    }
    renderpic = function(id){
        var parent = document.getElementById(id);
        if (parent == null) throw new Exception("Roditeljski element nema id:" + id + "Nije nadjen")
        
       var el =document.createElement("div");
        el.style.width = "50%";
        el.style.height="100%";
        var t = "";
        t += "<img src='"+this.url+"' alt='nema'>";

        el.innerHTML = t;
        parent.appendChild(el);}
        
        
        renderbutton = function(id){
            var parent = document.getElementById(id);
            if (parent == null) throw new Exception("Roditeljski element nema id:" + id + "Nije nadjen")
            
           var el =document.createElement("div");
            el.style.width = "50%";
            el.style.height="100%";
            var t = "";
            t += "<button onclick='sledeci()'>>></button>";
            t += "<button onclick='prethodni()'><<</button>";
    
            el.innerHTML = t;
            parent.appendChild(el);}
            pic = function(){
                return this.url;
            }


}