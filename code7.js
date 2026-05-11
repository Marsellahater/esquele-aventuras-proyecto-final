gdjs.controlesCode = {};
gdjs.controlesCode.localVariables = [];
gdjs.controlesCode.idToCallbackMap = new Map();
gdjs.controlesCode.GDmovimientoObjects1= [];
gdjs.controlesCode.GDmovimientoObjects2= [];
gdjs.controlesCode.GDsaltoObjects1= [];
gdjs.controlesCode.GDsaltoObjects2= [];
gdjs.controlesCode.GDpoder2Objects1= [];
gdjs.controlesCode.GDpoder2Objects2= [];
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.controlesCode.GDSkeletonObjects1= [];
gdjs.controlesCode.GDSkeletonObjects2= [];
gdjs.controlesCode.GDCheckerboard_9595blockObjects1= [];
gdjs.controlesCode.GDCheckerboard_9595blockObjects2= [];
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects1= [];
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects2= [];
gdjs.controlesCode.GDSpinning_9595BoneObjects1= [];
gdjs.controlesCode.GDSpinning_9595BoneObjects2= [];
gdjs.controlesCode.GDGrave_95951Objects1= [];
gdjs.controlesCode.GDGrave_95951Objects2= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects1= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects2= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs.controlesCode.GDGold_9595CoinObjects1= [];
gdjs.controlesCode.GDGold_9595CoinObjects2= [];
gdjs.controlesCode.GDtxt_9595monedasObjects1= [];
gdjs.controlesCode.GDtxt_9595monedasObjects2= [];
gdjs.controlesCode.GDTxt_9595vidaescenaObjects1= [];
gdjs.controlesCode.GDTxt_9595vidaescenaObjects2= [];
gdjs.controlesCode.GDpuntuacion2Objects1= [];
gdjs.controlesCode.GDpuntuacion2Objects2= [];
gdjs.controlesCode.GDMilk_9595BottleObjects1= [];
gdjs.controlesCode.GDMilk_9595BottleObjects2= [];
gdjs.controlesCode.GDHeartObjects1= [];
gdjs.controlesCode.GDHeartObjects2= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects1= [];
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects2= [];
gdjs.controlesCode.GDIce_9595ZombieObjects1= [];
gdjs.controlesCode.GDIce_9595ZombieObjects2= [];
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.controlesCode.GDFireballObjects1= [];
gdjs.controlesCode.GDFireballObjects2= [];
gdjs.controlesCode.GDPokey_9595BubObjects1= [];
gdjs.controlesCode.GDPokey_9595BubObjects2= [];
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects1= [];
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects2= [];
gdjs.controlesCode.GDFlatDarkJoystickObjects1= [];
gdjs.controlesCode.GDFlatDarkJoystickObjects2= [];
gdjs.controlesCode.GDB_9595ButtonObjects1= [];
gdjs.controlesCode.GDB_9595ButtonObjects2= [];
gdjs.controlesCode.GDA_9595ButtonObjects1= [];
gdjs.controlesCode.GDA_9595ButtonObjects2= [];


gdjs.controlesCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


};

gdjs.controlesCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.controlesCode.GDmovimientoObjects1.length = 0;
gdjs.controlesCode.GDmovimientoObjects2.length = 0;
gdjs.controlesCode.GDsaltoObjects1.length = 0;
gdjs.controlesCode.GDsaltoObjects2.length = 0;
gdjs.controlesCode.GDpoder2Objects1.length = 0;
gdjs.controlesCode.GDpoder2Objects2.length = 0;
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.controlesCode.GDSkeletonObjects1.length = 0;
gdjs.controlesCode.GDSkeletonObjects2.length = 0;
gdjs.controlesCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.controlesCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.controlesCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.controlesCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.controlesCode.GDGrave_95951Objects1.length = 0;
gdjs.controlesCode.GDGrave_95951Objects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.controlesCode.GDGold_9595CoinObjects1.length = 0;
gdjs.controlesCode.GDGold_9595CoinObjects2.length = 0;
gdjs.controlesCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.controlesCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.controlesCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.controlesCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.controlesCode.GDpuntuacion2Objects1.length = 0;
gdjs.controlesCode.GDpuntuacion2Objects2.length = 0;
gdjs.controlesCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.controlesCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.controlesCode.GDHeartObjects1.length = 0;
gdjs.controlesCode.GDHeartObjects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.controlesCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.controlesCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.controlesCode.GDFireballObjects1.length = 0;
gdjs.controlesCode.GDFireballObjects2.length = 0;
gdjs.controlesCode.GDPokey_9595BubObjects1.length = 0;
gdjs.controlesCode.GDPokey_9595BubObjects2.length = 0;
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.controlesCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.controlesCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.controlesCode.GDB_9595ButtonObjects1.length = 0;
gdjs.controlesCode.GDB_9595ButtonObjects2.length = 0;
gdjs.controlesCode.GDA_9595ButtonObjects1.length = 0;
gdjs.controlesCode.GDA_9595ButtonObjects2.length = 0;

gdjs.controlesCode.eventsList0(runtimeScene);
gdjs.controlesCode.GDmovimientoObjects1.length = 0;
gdjs.controlesCode.GDmovimientoObjects2.length = 0;
gdjs.controlesCode.GDsaltoObjects1.length = 0;
gdjs.controlesCode.GDsaltoObjects2.length = 0;
gdjs.controlesCode.GDpoder2Objects1.length = 0;
gdjs.controlesCode.GDpoder2Objects2.length = 0;
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.controlesCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.controlesCode.GDSkeletonObjects1.length = 0;
gdjs.controlesCode.GDSkeletonObjects2.length = 0;
gdjs.controlesCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.controlesCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.controlesCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.controlesCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.controlesCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.controlesCode.GDGrave_95951Objects1.length = 0;
gdjs.controlesCode.GDGrave_95951Objects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.controlesCode.GDGold_9595CoinObjects1.length = 0;
gdjs.controlesCode.GDGold_9595CoinObjects2.length = 0;
gdjs.controlesCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.controlesCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.controlesCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.controlesCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.controlesCode.GDpuntuacion2Objects1.length = 0;
gdjs.controlesCode.GDpuntuacion2Objects2.length = 0;
gdjs.controlesCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.controlesCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.controlesCode.GDHeartObjects1.length = 0;
gdjs.controlesCode.GDHeartObjects2.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.controlesCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.controlesCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.controlesCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.controlesCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.controlesCode.GDFireballObjects1.length = 0;
gdjs.controlesCode.GDFireballObjects2.length = 0;
gdjs.controlesCode.GDPokey_9595BubObjects1.length = 0;
gdjs.controlesCode.GDPokey_9595BubObjects2.length = 0;
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.controlesCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.controlesCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.controlesCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.controlesCode.GDB_9595ButtonObjects1.length = 0;
gdjs.controlesCode.GDB_9595ButtonObjects2.length = 0;
gdjs.controlesCode.GDA_9595ButtonObjects1.length = 0;
gdjs.controlesCode.GDA_9595ButtonObjects2.length = 0;


return;

}

gdjs['controlesCode'] = gdjs.controlesCode;
