<script setup></script>

<template>
	<section class="faq">
		<div class="container">
			<h2 class="faq__title">Часто задаваемые вопросы</h2>
			<div class="faq__layout">
				<ul class="faq__list">
					<AppFaqItem>
						<template #question>Почему нам доверяют исполнители?</template>
						<template #answer>
							<p>Мы предоставляем четкие и прозрачные условия сотрудничества, оперативно решаем возникающие вопросы и создаем комфортные условия для работы. Наш подход ориентирован на долгосрочное партнерство и взаимовыгодное сотрудничество.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Как мы обеспечиваем качество своих услуг?</template>
						<template #answer>
							<p>Мы применяем строгие стандарты контроля на каждом этапе работы, используем современные технологии и регулярно обучаем наш персонал. Весь процесс тщательно координируется, чтобы соответствовать ожиданиям клиентов и требованиям рынка.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Можете ли вы настроить услуги в соответствии с нашими потребностями?</template>
						<template #answer>
							<p>Да, мы предоставляем индивидуальные решения, адаптированные под ваши запросы. Наша гибкость позволяет разрабатывать уникальные предложения, которые учитывают специфику вашего бизнеса и помогают достигать поставленных целей.</p>
						</template>
					</AppFaqItem>
				</ul>

				<ul class="faq__list">
					<AppFaqItem>
						<template #question>Какой экономии затрат мы можем ожидать от аутсорсинга?</template>
						<template #answer>
							<p>Экономия может составлять до 30–50% по сравнению с внутренним выполнением аналогичных задач. Мы берем на себя управление процессами, что снижает расходы на найм, обучение и содержание сотрудников, а также оптимизирует операционные издержки.</p>
						</template>
					</AppFaqItem>

					<AppFaqItem>
						<template #question>Насколько гибкими являются ваши аутсорсинговые и аутстаффинговые решения?</template>
						<template #answer>
							<p>Наши решения максимально адаптивны. Мы предлагаем как краткосрочные, так и долгосрочные форматы сотрудничества, быстро реагируем на изменения потребностей и объемов работ, что обеспечивает гибкость и удобство для наших клиентов.</p>
						</template>
					</AppFaqItem>
				</ul>
			</div>
		</div>
	</section>
</template>

<style scoped>
.faq {
	/* margin-bottom: 80px; */
	padding: 80px 0 0;
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
		/* margin-bottom: var(--section-space); */
		padding: var(--section-space) 0 0;
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