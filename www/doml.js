module.exports = {

    getDMD:function(args) {
        cordova.exec(
            (!args.success) ? null : args.success, 
            function(error){alert('API getDMD Error:'+error)}, 
            "doml", 
            'getDMD',
            []
        );
    },
    
    setDMD:function(args) {
        cordova.exec(
            (!args.success) ? null : args.success, 
            function(error){alert('API setDMD Error:'+error)}, 
            "doml", 
            'setDMD',
            [{name:args.name}]
        );                
    }   
};

document.addEventListener("deviceready", cordovaBack, false);

function cordovaBack(){
    document.addEventListener("backbutton", backButton, false);
}

function backButton(){}