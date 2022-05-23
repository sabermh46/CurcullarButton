var cBtn = document.querySelectorAll('.cBtn');
		cBtn.forEach((btn, i)=>{
			var cbtnLen = cBtn.length;
			var cbtnArr = [];
			for(var a=0; a < cbtnLen; a++)
			{
				cbtnArr[a] = 0;
			}
			btn.addEventListener('click', ()=>{
				var currBtn = event.currentTarget;
				var btns = document.querySelectorAll(`.cBtn:nth-child(${i+1})> .btn`);
				var elemCount = btns.length;
				if(++cbtnArr[i]%2){
					btns.forEach((bt, j)=>{
						var rot = 360 / elemCount * j;
						bt.innerHTML = j+1;
						bt.style.transform = `rotate(${rot}deg) translateX(${55 + elemCount*4}px) rotate(${360 - rot}deg)`;
					})
				} else {
					btns.forEach((bt, j)=>{
						bt.style.transform = ``;
					})
				}
			});
		})

		/*
			var elemCount = btns.length;
			cBtn.classList.toggle('active');
			if(++clicked%2){
				btns.forEach((bt, i)=>{
					var rot = 360 / elemCount * i;
					bt.innerHTML = i+1;
					bt.style.transform = `rotate(${rot}deg) translateX(${55 + elemCount*4}px) rotate(${360 - rot}deg)`;
				})
			} else {
				btns.forEach((bt, i)=>{
					bt.style.transform = ``;
				})
			}	
		*/