<script setup>
const id = useId();
</script>

<template>
	<li class="faq__item">
		<div class="faq__item-question" data-bs-toggle="collapse" :data-bs-target="`#faq-answer-${id}`">
			<div class="faq__item-question-content">
				<p>
					<slot name="question"></slot>
				</p>
			</div>
			<button class="faq__item-question-button"></button>
		</div>
		<div class="faq__item-answer collapse" :id="`faq-answer-${id}`">
			<div class="faq__item-answer-content">
				<slot name="answer"></slot>
			</div>
		</div>
	</li>
</template>

<style scoped>
.faq__item {
	--padding-right: 30px;
	--padding-left: 50px;
	border-radius: 30px;
	background-color: #f5f7fa;
}

.faq__item-question {
	display: grid;
	grid-template-columns: 1fr auto;
	align-items: start;
	gap: 70px;
	padding: 31px var(--padding-right) 31px var(--padding-left);
	cursor: pointer;
}

.faq__item-question-button {
	display: flex;
	justify-content: center;
	align-items: center;
	width: 39px;
	height: 39px;
	background-color: #fee02e;
	border: none;
	border-radius: 50%;
	transition: background-color 250ms ease-in-out;
	cursor: pointer;
}

.faq__item-question-button:hover {
	background-color: #f3d520;
}

.faq__item-question-button::before {
	content: "";
	width: 15px;
	height: 19px;
	background-image: url("data:image/svg+xml,%3Csvg width='15' height='9' viewBox='0 0 15 9' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M7.49998 9C7.23115 9 6.96235 8.89196 6.75739 8.67634L0.307714 1.88748C-0.102571 1.45562 -0.102571 0.755447 0.307714 0.323763C0.717835 -0.107921 1.3829 -0.107921 1.79323 0.323763L7.49998 6.3309L13.2068 0.323961C13.6171 -0.107723 14.2821 -0.107723 14.6921 0.323961C15.1026 0.755645 15.1026 1.45582 14.6921 1.88768L8.24256 8.67655C8.0375 8.89222 7.76871 9 7.49998 9Z' fill='%231C1C1C' /%3E%3C/svg%3E");
	background-size: contain;
	background-position: center;
	background-repeat: no-repeat;
	transform: rotate(180deg) translateY(1px);
	transition: transform 250ms ease-in-out;
}

.faq__item-question.collapsed .faq__item-question-button::before {
	transform: translateY(1px);
}

.faq__item-question-content:deep(p) {
	font-size: 26px;
	font-weight: 600;
	line-height: 1.19;
	color: #1c1c1c;
}

.faq__item-answer {}

.faq__item-answer-content {
	padding: 0 var(--padding-right) 50px var(--padding-left);
}

.faq__item-answer-content:deep(p),
.faq__item-answer-content:deep(li) {
	font-size: 18px;
	font-weight: 400;
	line-height: 1.55;
	color: #0c352c;
}

.faq__item-answer-content:deep(p b) {
	font-weight: 700;
}

.faq__item-answer-content:deep(li:not(:last-child)) {
	margin-bottom: 13px;
}
</style>