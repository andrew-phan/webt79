<template>
    <header class="header">
        <!--Web-->
        <div class="header01">
            <div class="inner">
                <div class="left pc">
                    <HeaderLogoPC />
                </div>
                <div class="right">
                    <AuthLoginDesktop />
                </div>
                <HeaderLanguageSelector />
            </div>
        </div>
        <div class="header02 pc">
            <div class="inner">
                <MenuDesktop />
            </div>
        </div>
        <!--Mobile-->
        <div class="header03 sp">
            <div class="inner">
                <HeaderLogoSP />
                <AuthLoginLinkMobile />
            </div>
        </div>
    </header>
    <AuthLoginMobile />

</template>
