gdjs.game_32overCode = {};
gdjs.game_32overCode.localVariables = [];
gdjs.game_32overCode.idToCallbackMap = new Map();
gdjs.game_32overCode.GDcloud_95951Objects1= [];
gdjs.game_32overCode.GDcloud_95951Objects2= [];
gdjs.game_32overCode.GDSmallGreenButtonObjects1= [];
gdjs.game_32overCode.GDSmallGreenButtonObjects2= [];
gdjs.game_32overCode.GDSmallRedButtonObjects1= [];
gdjs.game_32overCode.GDSmallRedButtonObjects2= [];
gdjs.game_32overCode.GDSkeletonObjects1= [];
gdjs.game_32overCode.GDSkeletonObjects2= [];
gdjs.game_32overCode.GDCheckerboard_9595blockObjects1= [];
gdjs.game_32overCode.GDCheckerboard_9595blockObjects2= [];
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects1= [];
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects2= [];
gdjs.game_32overCode.GDSpinning_9595BoneObjects1= [];
gdjs.game_32overCode.GDSpinning_9595BoneObjects2= [];
gdjs.game_32overCode.GDGrave_95951Objects1= [];
gdjs.game_32overCode.GDGrave_95951Objects2= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects1= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects2= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs.game_32overCode.GDGold_9595CoinObjects1= [];
gdjs.game_32overCode.GDGold_9595CoinObjects2= [];
gdjs.game_32overCode.GDtxt_9595monedasObjects1= [];
gdjs.game_32overCode.GDtxt_9595monedasObjects2= [];
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects1= [];
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects2= [];
gdjs.game_32overCode.GDpuntuacion2Objects1= [];
gdjs.game_32overCode.GDpuntuacion2Objects2= [];
gdjs.game_32overCode.GDMilk_9595BottleObjects1= [];
gdjs.game_32overCode.GDMilk_9595BottleObjects2= [];
gdjs.game_32overCode.GDHeartObjects1= [];
gdjs.game_32overCode.GDHeartObjects2= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects1= [];
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects2= [];
gdjs.game_32overCode.GDIce_9595ZombieObjects1= [];
gdjs.game_32overCode.GDIce_9595ZombieObjects2= [];
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.game_32overCode.GDFireballObjects1= [];
gdjs.game_32overCode.GDFireballObjects2= [];
gdjs.game_32overCode.GDPokey_9595BubObjects1= [];
gdjs.game_32overCode.GDPokey_9595BubObjects2= [];
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects1= [];
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects2= [];
gdjs.game_32overCode.GDFlatDarkJoystickObjects1= [];
gdjs.game_32overCode.GDFlatDarkJoystickObjects2= [];
gdjs.game_32overCode.GDB_9595ButtonObjects1= [];
gdjs.game_32overCode.GDB_9595ButtonObjects2= [];
gdjs.game_32overCode.GDA_9595ButtonObjects1= [];
gdjs.game_32overCode.GDA_9595ButtonObjects2= [];


gdjs.game_32overCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("SmallGreenButton"), gdjs.game_32overCode.GDSmallGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDSmallGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDSmallGreenButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDSmallGreenButtonObjects1[k] = gdjs.game_32overCode.GDSmallGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDSmallGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SmallRedButton"), gdjs.game_32overCode.GDSmallRedButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.game_32overCode.GDSmallRedButtonObjects1.length;i<l;++i) {
    if ( gdjs.game_32overCode.GDSmallRedButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.game_32overCode.GDSmallRedButtonObjects1[k] = gdjs.game_32overCode.GDSmallRedButtonObjects1[i];
        ++k;
    }
}
gdjs.game_32overCode.GDSmallRedButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "menu", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyJustPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
}

}


};

gdjs.game_32overCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.game_32overCode.GDcloud_95951Objects1.length = 0;
gdjs.game_32overCode.GDcloud_95951Objects2.length = 0;
gdjs.game_32overCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.game_32overCode.GDSmallRedButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallRedButtonObjects2.length = 0;
gdjs.game_32overCode.GDSkeletonObjects1.length = 0;
gdjs.game_32overCode.GDSkeletonObjects2.length = 0;
gdjs.game_32overCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.game_32overCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.game_32overCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.game_32overCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.game_32overCode.GDGrave_95951Objects1.length = 0;
gdjs.game_32overCode.GDGrave_95951Objects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.game_32overCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.game_32overCode.GDpuntuacion2Objects1.length = 0;
gdjs.game_32overCode.GDpuntuacion2Objects2.length = 0;
gdjs.game_32overCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.game_32overCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.game_32overCode.GDHeartObjects1.length = 0;
gdjs.game_32overCode.GDHeartObjects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.game_32overCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.game_32overCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.game_32overCode.GDFireballObjects1.length = 0;
gdjs.game_32overCode.GDFireballObjects2.length = 0;
gdjs.game_32overCode.GDPokey_9595BubObjects1.length = 0;
gdjs.game_32overCode.GDPokey_9595BubObjects2.length = 0;
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.game_32overCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects2.length = 0;

gdjs.game_32overCode.eventsList0(runtimeScene);
gdjs.game_32overCode.GDcloud_95951Objects1.length = 0;
gdjs.game_32overCode.GDcloud_95951Objects2.length = 0;
gdjs.game_32overCode.GDSmallGreenButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallGreenButtonObjects2.length = 0;
gdjs.game_32overCode.GDSmallRedButtonObjects1.length = 0;
gdjs.game_32overCode.GDSmallRedButtonObjects2.length = 0;
gdjs.game_32overCode.GDSkeletonObjects1.length = 0;
gdjs.game_32overCode.GDSkeletonObjects2.length = 0;
gdjs.game_32overCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.game_32overCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.game_32overCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.game_32overCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.game_32overCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.game_32overCode.GDGrave_95951Objects1.length = 0;
gdjs.game_32overCode.GDGrave_95951Objects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects1.length = 0;
gdjs.game_32overCode.GDGold_9595CoinObjects2.length = 0;
gdjs.game_32overCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.game_32overCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.game_32overCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.game_32overCode.GDpuntuacion2Objects1.length = 0;
gdjs.game_32overCode.GDpuntuacion2Objects2.length = 0;
gdjs.game_32overCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.game_32overCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.game_32overCode.GDHeartObjects1.length = 0;
gdjs.game_32overCode.GDHeartObjects2.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.game_32overCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.game_32overCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.game_32overCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.game_32overCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.game_32overCode.GDFireballObjects1.length = 0;
gdjs.game_32overCode.GDFireballObjects2.length = 0;
gdjs.game_32overCode.GDPokey_9595BubObjects1.length = 0;
gdjs.game_32overCode.GDPokey_9595BubObjects2.length = 0;
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.game_32overCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.game_32overCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.game_32overCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDB_9595ButtonObjects2.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects1.length = 0;
gdjs.game_32overCode.GDA_9595ButtonObjects2.length = 0;


return;

}

gdjs['game_32overCode'] = gdjs.game_32overCode;
