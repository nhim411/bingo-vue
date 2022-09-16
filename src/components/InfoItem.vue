<template>
  <section class="section">
    <div
      class="columns is-variable box is-centered is-3 is-align-items-stretch"
    >
      <div class="column">
        <div class="has-text-centered box">
          <div>
            <p class="heading">Ngày</p>
            <p class="text">
              <strong>Time:</strong> {{ new Date().toLocaleString() }}
            </p>
            <p class="text">
              <strong>Giờ quay:</strong> {{ new Date().toLocaleString() }}
            </p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="has-text-centered box">
          <div>
            <p class="heading">Số vé đã mua</p>
            <p class="title">5</p>
          </div>
        </div>
      </div>
      <div class="column">
        <div class="has-text-centered box">
          <div>
            <p class="heading">Giải thưởng</p>
            <div class="columns">
              <div class="column">
                <p class="text has-text-left">
                  <strong>Giải nhất: </strong>300 coins
                </p>
              </div>
              <div class="column">
                <p class="text"><strong>Nam 1</strong></p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="text has-text-left">
                  <strong>Giải nhì: </strong>200 coins
                </p>
              </div>
              <div class="column">
                <p class="text"><strong>Nam 2</strong></p>
              </div>
            </div>
            <div class="columns">
              <div class="column">
                <p class="text has-text-left">
                  <strong>Giải ba: </strong>100 coins
                </p>
              </div>
              <div class="column">
                <p class="text"><strong>Nam 3</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
info-item {
  background-color: #000;
}

.box {
  height: 100%;
}
</style>
