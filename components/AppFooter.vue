<template>
    <div>
        <footer class="footer">
            <div class="footer-wrapper">
                <div class="inner">
                    <img src="/image/Desktop/footer/asia-gaming.png" alt="">
                    <img src="/image/Desktop/footer/board-game.png" alt="">
                    <img src="/image/Desktop/footer/ebet.png" alt="">

                    <img src="/image/Desktop/footer/pg-pocket-game-soft.png" alt="">
                    <img src="/image/Desktop/footer/sports.png" alt="">
                    <img src="/image/Desktop/footer/wm.png" alt="">
                    <img src="/image/Desktop/footer/gameplay.png" alt="">
                    <img src="/image/Desktop/footer/joker.png" alt="">
                    <img src="/image/Desktop/footer/xicg.png" alt="">
                    <img src="/image/Desktop/footer/s128.png" alt="">
                </div>
            </div>
            <div class="footer-wrapper-two">
                <div class="inner">
                    <div class="brand">
                        <a class="img01" href="https://mobile.3nana.xyz" target="_blank">
                            <img src="/image/Desktop/footer/mibox.png" alt="">
                        </a>
                        <p>T79</p>

                        <div class="huoban">
                            <a href="#" class="skype skypeH">
                                <img src="/image/Desktop/footer/skype.png" alt="">
                            </a>
                            <a href="#" class="skype telegramH">
                                <img src="/image/Desktop/footer/telegram.png" alt="">
                            </a>
                            <a href="mail:sales@mobile.3nana.xyz" class="skype emailH">
                                <img src="/image/Desktop/footer/mail.png" alt="">
                            </a>
                        </div>
                    </div>
                    <div class="brand-two">
                        <section><img src="/image/Desktop/footer/malta-gaming.svg" class="brand_svg">
                            <p>Chứng nhận Giấy phép Malta (MGA)</p>
                        </section>
                        <section><img src="/image/Desktop/footer/british-virgin-islands.svg" class="brand_svg">
                            <p>Chứng nhận Quần đảo Virgin thuộc Anh (BVI)</p>
                        </section>
                        <section><img src="/image/Desktop/footer/gambling-commission.svg" class="brand_svg">
                            <p>Ủy ban Giám sát GC Anh</p>
                        </section>
                        <section><img src="/image/Desktop/footer/phi.svg" class="brand_svg">
                            <p>Philippines (PAGCOR) giám sát giấy phép</p>
                        </section>
                    </div>
                    <div class="brand-three">
                        <a v-for="item in aboutItems" :key="item.id" :href="`#/AboutUs/${item.id}`" class="link-item">
                            {{ item.title }}
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-wrapper-three">
                <p> T79 </p>
                <p>Bản quyền ©2024 T79 Giữ quyền sở hữu</p>
            </div>
        </footer>

        <div class="sp">
            <nav class="navBar-bottom">

                <a href="#/main/home" class="navBar-item is-active">
                    <p class="img"><img alt="navBarIcon" src="/image/Mobile/footer/home.png"></p>
                    <p>Trang chủ</p>
                </a>
                <a href="#/main/activity" class="navBar-item">
                    <p class="img"><img alt="navBarIcon" src="/image/Mobile/footer/uu-dai.png"></p>

                    <p>Ưu đãi</p>
                </a><a href="#/main/server" class="navBar-item">
                    <p class="img"><img alt="navBarIcon" src="/image/Mobile/footer/ho-tro.png"></p>

                    <p>Hỗ Trợ</p>
                </a><a href="#/main/center" class="navBar-item">
                    <p class="img"><img alt="navBarIcon" src="/image/Mobile/footer/cua-toi.png"></p>
                    <p>Của tôi.</p>
                </a>

            </nav>
        </div>
    </div>
</template>

<script setup lang="ts">
import useApi from '@/composables/useApi'
const { data: aboutItems } = await useApi(`about/list?lang=vi`);
</script>
