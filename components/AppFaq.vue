<script setup></script>

<template>
	<section class="faq">
		<div class="container">
			<h2 class="faq__title">Частые задаваемые вопросы</h2>
			<div class="faq__layout">
				<ul class="faq__list">
					<AppFaqItem>
						<template #question>Почему с нами работают крупные федеральные клиенты?</template>
						<template #answer>
							<ol>
								<li>
									<p><b>Минимизация рисков.</b></p>
									<p>Работаем в полном соответствии с законом. Несем 100% юридическую и финансовую ответственность за привлеченный персонал.</p>
								</li>
								<li>
									<p><b>Гарантия качества персонала.</b></p>
									<p>Проводим систематическое обучение и оценку квалификации сотрудников из РФ и СНГ, гарантируя высокий стандарт профессионального уровня.</p>
								</li>
								<li>
									<p><b>Масштабируемость и гибкость.</b></p>
									<p>Корректируем численность персонала в соответствии с сезонным спросом и ростом бизнеса, исключая риски, связанные с нехваткой персонала.</p>
								</li>
								<li>
									<p><b>Широкая география присутствия.</b></p>
									<p>Работаем в 150+ городах России. Быстрые сроки открытия нового города.</p>
								</li>
								<li>
									<p><b>Оперативное решение вопросов.</b></p>
									<p>Мы привыкли к сжатым срокам реализации проектов, по запросу быстро выводим подходящий персонал всего за сутки.</p>
								</li>
								<li>
									<p><b>Уникальные решения под ключ.</b></p>
									<p>Можем предложить как апробированное решение, составленное из работающих схем, так и создать абсолютно новое, не имеющее аналогов на рынке.</p>
								</li>
							</ol>

						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Почему нам доверяют исполнители?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, magnam minima distinctio magni quo alias modi earum tenetur vitae iure voluptates, suscipit blanditiis corrupti reprehenderit illum, aliquid beatae possimus.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Как мы обеспечиваем качество своих услуг?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, magnam minima distinctio magni quo alias modi earum tenetur vitae iure voluptates, suscipit blanditiis corrupti reprehenderit illum, aliquid beatae possimus.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Как мы обеспечиваем качество своих услуг?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, magnam minima distinctio magni quo alias modi earum tenetur vitae iure voluptates, suscipit blanditiis corrupti reprehenderit illum, aliquid beatae possimus.</p>
						</template>
					</AppFaqItem>
				</ul>
				<ul class="faq__list">
					<AppFaqItem>
						<template #question>Можете ли вы настроить услуги в соответствии с нашими потребностями?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia impedit, magnam minima distinctio magni quo alias modi earum tenetur vitae iure voluptates, suscipit blanditiis corrupti reprehenderit illum, aliquid beatae possimus.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Какой экономии затрат мы можем ожидать от&nbsp;аутсорсинга?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae alias nisi, facilis ad incidunt minima eos nam ratione repudiandae. Voluptatum, veniam iste. Culpa ad facilis blanditiis non itaque nam. Beatae.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Насколько гибкими являются ваши аутсорсинговые и аутстаффинговые решения?</template>
						<template #answer>
							<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae alias nisi, facilis ad incidunt minima eos nam ratione repudiandae. Voluptatum, veniam iste. Culpa ad facilis blanditiis non itaque nam. Beatae.</p>
						</template>
					</AppFaqItem>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
.faq {
	margin-bottom: 80px;
}

.faq__title {
	margin-bottom: 38px;
	font-family: var(--secondary-font-family);
	font-size: var(--section-title-fz);
	font-weight: 400;
	color: var(--font-basic);
}

.faq__layout {
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	align-items: start;
	--gap: 30px;
	gap: var(--gap);
}

.faq__list {
	display: grid;
	gap: var(--gap);
}

@media (max-width: 1399.98px) {
	.faq__layout {
		--gap: 20px;
	}
}

@media (max-width: 1199.98px) {
	.faq__layout {
		grid-template-columns: 100%;
	}
}

@media (max-width: 991.98px) {
	.faq {
		margin-bottom: var(--section-space);
	}

	.faq__layout {
		--gap: 15px;
	}
}

@media (max-width: 575.98px) {
	.faq__title {
		margin-bottom: 30px;
	}
}

@media (max-width: 479.98px) {
	.faq__layout {
		--gap: 10px;
	}
}
</style>