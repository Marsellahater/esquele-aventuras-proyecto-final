gdjs.menuCode = {};
gdjs.menuCode.localVariables = [];
gdjs.menuCode.idToCallbackMap = new Map();
gdjs.menuCode.GDStone_95959PatchObjects1= [];
gdjs.menuCode.GDStone_95959PatchObjects2= [];
gdjs.menuCode.GDtitleObjects1= [];
gdjs.menuCode.GDtitleObjects2= [];
gdjs.menuCode.GDcontributorsObjects1= [];
gdjs.menuCode.GDcontributorsObjects2= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1= [];
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2= [];
gdjs.menuCode.GDGreyButtonWithShadowObjects1= [];
gdjs.menuCode.GDGreyButtonWithShadowObjects2= [];
gdjs.menuCode.GDOnScreenControlsButtonObjects1= [];
gdjs.menuCode.GDOnScreenControlsButtonObjects2= [];
gdjs.menuCode.GDSkeletonObjects1= [];
gdjs.menuCode.GDSkeletonObjects2= [];
gdjs.menuCode.GDCheckerboard_9595blockObjects1= [];
gdjs.menuCode.GDCheckerboard_9595blockObjects2= [];
gdjs.menuCode.GDBuff_9595Arrow_95952Objects1= [];
gdjs.menuCode.GDBuff_9595Arrow_95952Objects2= [];
gdjs.menuCode.GDSpinning_9595BoneObjects1= [];
gdjs.menuCode.GDSpinning_9595BoneObjects2= [];
gdjs.menuCode.GDGrave_95951Objects1= [];
gdjs.menuCode.GDGrave_95951Objects2= [];
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects1= [];
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects2= [];
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects1= [];
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects2= [];
gdjs.menuCode.GDGold_9595CoinObjects1= [];
gdjs.menuCode.GDGold_9595CoinObjects2= [];
gdjs.menuCode.GDtxt_9595monedasObjects1= [];
gdjs.menuCode.GDtxt_9595monedasObjects2= [];
gdjs.menuCode.GDTxt_9595vidaescenaObjects1= [];
gdjs.menuCode.GDTxt_9595vidaescenaObjects2= [];
gdjs.menuCode.GDpuntuacion2Objects1= [];
gdjs.menuCode.GDpuntuacion2Objects2= [];
gdjs.menuCode.GDMilk_9595BottleObjects1= [];
gdjs.menuCode.GDMilk_9595BottleObjects2= [];
gdjs.menuCode.GDHeartObjects1= [];
gdjs.menuCode.GDHeartObjects2= [];
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects1= [];
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects2= [];
gdjs.menuCode.GDIce_9595ZombieObjects1= [];
gdjs.menuCode.GDIce_9595ZombieObjects2= [];
gdjs.menuCode.GDDevo_9595the_9595DevilObjects1= [];
gdjs.menuCode.GDDevo_9595the_9595DevilObjects2= [];
gdjs.menuCode.GDFireballObjects1= [];
gdjs.menuCode.GDFireballObjects2= [];
gdjs.menuCode.GDPokey_9595BubObjects1= [];
gdjs.menuCode.GDPokey_9595BubObjects2= [];
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects1= [];
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects2= [];
gdjs.menuCode.GDFlatDarkJoystickObjects1= [];
gdjs.menuCode.GDFlatDarkJoystickObjects2= [];
gdjs.menuCode.GDB_9595ButtonObjects1= [];
gdjs.menuCode.GDB_9595ButtonObjects2= [];
gdjs.menuCode.GDA_9595ButtonObjects1= [];
gdjs.menuCode.GDA_9595ButtonObjects2= [];


gdjs.menuCode.asyncCallback16964740 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.menuCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Escena 1", false);
}
gdjs.menuCode.localVariables.length = 0;
}
gdjs.menuCode.idToCallbackMap.set(16964740, gdjs.menuCode.asyncCallback16964740);
gdjs.menuCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.menuCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1.3), (runtimeScene) => (gdjs.menuCode.asyncCallback16964740(runtimeScene, asyncObjectsList)), 16964740, asyncObjectsList);
}
}

}


};gdjs.menuCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsIdle(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.menuCode.GDSkeletonObjects1);
{for(var i = 0, len = gdjs.menuCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Bone Pile");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("TransparentButtonWithWhiteBlueBorder"), gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[k] = gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.menuCode.GDSkeletonObjects1);
{for(var i = 0, len = gdjs.menuCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDSkeletonObjects1[i].getBehavior("Animation").setAnimationName("Bone Pile Wakeup");
}
}

{ //Subevents
gdjs.menuCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Checkerboard_block"), gdjs.menuCode.GDCheckerboard_9595blockObjects1);
{for(var i = 0, len = gdjs.menuCode.GDCheckerboard_9595blockObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDCheckerboard_9595blockObjects1[i].hide();
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Skeleton"), gdjs.menuCode.GDSkeletonObjects1);
{for(var i = 0, len = gdjs.menuCode.GDSkeletonObjects1.length ;i < len;++i) {
    gdjs.menuCode.GDSkeletonObjects1[i].activateBehavior("PlatformerObject", false);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreyButtonWithShadow"), gdjs.menuCode.GDGreyButtonWithShadowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDGreyButtonWithShadowObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDGreyButtonWithShadowObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDGreyButtonWithShadowObjects1[k] = gdjs.menuCode.GDGreyButtonWithShadowObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDGreyButtonWithShadowObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "controles", false);
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("OnScreenControlsButton"), gdjs.menuCode.GDOnScreenControlsButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.menuCode.GDOnScreenControlsButtonObjects1.length;i<l;++i) {
    if ( gdjs.menuCode.GDOnScreenControlsButtonObjects1[i].IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.menuCode.GDOnScreenControlsButtonObjects1[k] = gdjs.menuCode.GDOnScreenControlsButtonObjects1[i];
        ++k;
    }
}
gdjs.menuCode.GDOnScreenControlsButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}
}

}


};

gdjs.menuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.menuCode.GDStone_95959PatchObjects1.length = 0;
gdjs.menuCode.GDStone_95959PatchObjects2.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDcontributorsObjects1.length = 0;
gdjs.menuCode.GDcontributorsObjects2.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.menuCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.menuCode.GDSkeletonObjects1.length = 0;
gdjs.menuCode.GDSkeletonObjects2.length = 0;
gdjs.menuCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.menuCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.menuCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.menuCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.menuCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.menuCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.menuCode.GDGrave_95951Objects1.length = 0;
gdjs.menuCode.GDGrave_95951Objects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.menuCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.menuCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.menuCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.menuCode.GDpuntuacion2Objects1.length = 0;
gdjs.menuCode.GDpuntuacion2Objects2.length = 0;
gdjs.menuCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.menuCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.menuCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.menuCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.menuCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.menuCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDPokey_9595BubObjects1.length = 0;
gdjs.menuCode.GDPokey_9595BubObjects2.length = 0;
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.menuCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects2.length = 0;

gdjs.menuCode.eventsList1(runtimeScene);
gdjs.menuCode.GDStone_95959PatchObjects1.length = 0;
gdjs.menuCode.GDStone_95959PatchObjects2.length = 0;
gdjs.menuCode.GDtitleObjects1.length = 0;
gdjs.menuCode.GDtitleObjects2.length = 0;
gdjs.menuCode.GDcontributorsObjects1.length = 0;
gdjs.menuCode.GDcontributorsObjects2.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects1.length = 0;
gdjs.menuCode.GDTransparentButtonWithWhiteBlueBorderObjects2.length = 0;
gdjs.menuCode.GDGreyButtonWithShadowObjects1.length = 0;
gdjs.menuCode.GDGreyButtonWithShadowObjects2.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects1.length = 0;
gdjs.menuCode.GDOnScreenControlsButtonObjects2.length = 0;
gdjs.menuCode.GDSkeletonObjects1.length = 0;
gdjs.menuCode.GDSkeletonObjects2.length = 0;
gdjs.menuCode.GDCheckerboard_9595blockObjects1.length = 0;
gdjs.menuCode.GDCheckerboard_9595blockObjects2.length = 0;
gdjs.menuCode.GDBuff_9595Arrow_95952Objects1.length = 0;
gdjs.menuCode.GDBuff_9595Arrow_95952Objects2.length = 0;
gdjs.menuCode.GDSpinning_9595BoneObjects1.length = 0;
gdjs.menuCode.GDSpinning_9595BoneObjects2.length = 0;
gdjs.menuCode.GDGrave_95951Objects1.length = 0;
gdjs.menuCode.GDGrave_95951Objects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595RightObjects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595LeftObjects2.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects1.length = 0;
gdjs.menuCode.GDGold_9595CoinObjects2.length = 0;
gdjs.menuCode.GDtxt_9595monedasObjects1.length = 0;
gdjs.menuCode.GDtxt_9595monedasObjects2.length = 0;
gdjs.menuCode.GDTxt_9595vidaescenaObjects1.length = 0;
gdjs.menuCode.GDTxt_9595vidaescenaObjects2.length = 0;
gdjs.menuCode.GDpuntuacion2Objects1.length = 0;
gdjs.menuCode.GDpuntuacion2Objects2.length = 0;
gdjs.menuCode.GDMilk_9595BottleObjects1.length = 0;
gdjs.menuCode.GDMilk_9595BottleObjects2.length = 0;
gdjs.menuCode.GDHeartObjects1.length = 0;
gdjs.menuCode.GDHeartObjects2.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects1.length = 0;
gdjs.menuCode.GDChevron_9595Arrow_9595UpObjects2.length = 0;
gdjs.menuCode.GDIce_9595ZombieObjects1.length = 0;
gdjs.menuCode.GDIce_9595ZombieObjects2.length = 0;
gdjs.menuCode.GDDevo_9595the_9595DevilObjects1.length = 0;
gdjs.menuCode.GDDevo_9595the_9595DevilObjects2.length = 0;
gdjs.menuCode.GDFireballObjects1.length = 0;
gdjs.menuCode.GDFireballObjects2.length = 0;
gdjs.menuCode.GDPokey_9595BubObjects1.length = 0;
gdjs.menuCode.GDPokey_9595BubObjects2.length = 0;
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects1.length = 0;
gdjs.menuCode.GDSkeleton_9595evil_9595twinObjects2.length = 0;
gdjs.menuCode.GDFlatDarkJoystickObjects1.length = 0;
gdjs.menuCode.GDFlatDarkJoystickObjects2.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDB_9595ButtonObjects2.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects1.length = 0;
gdjs.menuCode.GDA_9595ButtonObjects2.length = 0;


return;

}

gdjs['menuCode'] = gdjs.menuCode;
